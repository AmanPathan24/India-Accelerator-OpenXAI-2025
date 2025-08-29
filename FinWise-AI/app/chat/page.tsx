'use client'
import { useEffect, useRef, useState } from 'react'
import { Expense } from '../../types'

export default function ChatPage() {
  const [messages, setMessages] = useState<{ id: number; from: 'user' | 'bot'; text: string }[]>([
    { id: 1, from: 'bot', text: "Hello! I'm your AI finance assistant. Ask about monthly spending, categories, or get saving tips." }
  ])
  const [input, setInput] = useState('')
  const [expenses, setExpenses] = useState<Expense[]>([])
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem('expenses')
    setExpenses(saved ? JSON.parse(saved) : [])
  }, [])

  useEffect(() => {
    containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  async function handleSend() {
    const trimmed = input.trim()
    if (!trimmed) return
    const userMsg: { id: number; from: "user" | "bot"; text: string } = { id: Date.now(), from: "user", text: trimmed }
    setMessages(prev => [...prev, userMsg])
    setInput('')

    // Try server LLM route first; fallback to rule-based
    try {
      const res = await fetch('/api/llm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, expenses })
      })
      if (!res.ok) throw new Error('LLM route failed')
      const data = await res.json()
      setMessages(prev => [...prev, { id: Date.now() + 1, from: 'bot', text: data.answer }])
    } catch {
      // Rule-based fallback (same logic as original)
      const answer = generateRuleResponse(trimmed, expenses)
      setMessages(prev => [...prev, { id: Date.now() + 2, from: 'bot', text: answer }])
    }
  }

  function generateRuleResponse(message: string, expenses: Expense[]) {
    const msg = message.toLowerCase()
    const total = expenses.reduce((s, e) => s + e.amount, 0)
    const thisMonth = new Date().getMonth()
    const monthTotal = expenses
      .filter(e => new Date(e.date).getMonth() === thisMonth)
      .reduce((s, e) => s + e.amount, 0)
    const categoryTotals: Record<string, number> = {}
    expenses.forEach(e => (categoryTotals[e.category] = (categoryTotals[e.category] || 0) + e.amount))

    if (msg.includes('month') && msg.includes('spend')) {
      return `This month you've spent $${monthTotal.toFixed(2)} across ${expenses.filter(e => new Date(e.date).getMonth() === thisMonth).length} transactions.`
    }
    if (msg.includes('category') || msg.includes('most')) {
      if (Object.keys(categoryTotals).length === 0) return 'No expenses yet — add some to get category insights.'
      const top = Object.keys(categoryTotals).reduce((a, b) => (categoryTotals[a] > categoryTotals[b] ? a : b))
      return `Your biggest category is ${top} with $${categoryTotals[top].toFixed(2)} spent (${((categoryTotals[top] / total) * 100 || 0).toFixed(1)}%).`
    }
    if (msg.includes('tip') || msg.includes('save') || msg.includes('advice')) {
      const tips = [
        "Try the 50/30/20 rule (needs/wants/savings).",
        "Review subscriptions monthly and cancel unused ones.",
        "Cook more at home to reduce food spending."
      ]
      return tips[Math.floor(Math.random() * tips.length)]
    }
    if (msg.includes('total')) {
      return `Your total recorded expenses are $${total.toFixed(2)} across ${expenses.length} transactions.`
    }
    return "I didn't catch that — try 'How much did I spend this month?' or 'Give me saving tips'."
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Finance Assistant</h1>
        <p className="text-gray-600">Ask questions about your expenses and get personalized financial advice</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600">🤖</div>
            <div>
              <h3 className="font-semibold">Finance Bot</h3>
              <p className="text-sm text-indigo-100">Your personal finance advisor</p>
            </div>
          </div>
        </div>

        <div ref={containerRef} className="chat-container p-6 space-y-4">
          {messages.map(m => (
            <div key={m.id} className={m.from === 'user' ? 'flex justify-end' : 'flex items-start gap-3'}>
              {m.from === 'bot' && <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white">🤖</div>}
              <div className={`${m.from === 'user' ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-900'} rounded-lg p-3 max-w-md`}>
                <p className="text-sm whitespace-pre-wrap">{m.text}</p>
              </div>
              {m.from === 'user' && <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white">🙂</div>}
            </div>
          ))}
        </div>

        <div className="p-4 border-t">
          <div className="flex gap-3">
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} placeholder="Ask me about your finances..." className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
            <button onClick={handleSend} className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold">Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}
