'use client'
import { FormEvent, useState } from 'react'
import { Expense } from '../types'

export default function ExpenseForm({ onAdd }: { onAdd: (e: Expense) => void }) {
  const [amount, setAmount] = useState<number | ''>('')
  const [category, setCategory] = useState('food')
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
  const [description, setDescription] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!amount || amount <= 0) return alert('Please enter a valid amount')
    const expense: Expense = {
      id: Date.now(),
      amount: Number(amount),
      category,
      date,
      description: description || 'No description',
      createdAt: new Date().toISOString()
    }
    onAdd(expense)
    setAmount('')
    setCategory('food')
    setDate(new Date().toISOString().slice(0, 10))
    setDescription('')
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Add Expense</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
          <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} step="0.01" placeholder="0.00" className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select value={category} onChange={e => setCategory(e.target.value)} className="w-full px-3 py-2 border rounded-lg">
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="entertainment">Entertainment</option>
            <option value="utilities">Utilities</option>
            <option value="shopping">Shopping</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Optional description" className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <button type="submit" className="w-full py-2 rounded-lg text-white bg-gradient-to-r from-indigo-500 to-purple-600">Add Expense</button>
      </form>
    </div>
  )
}
