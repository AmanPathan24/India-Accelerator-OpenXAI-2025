import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { message, expenses } = body

    const OPENAI_API_KEY = process.env.OPENAI_API_KEY
    if (!OPENAI_API_KEY) {
      // No key — return a helpful message to the client so it can fallback
      return NextResponse.json({ answer: 'LLM not configured on server. Using local assistant fallback.' })
    }

    // Compose a lightweight prompt with top-level expense summary
    const total = (expenses || []).reduce((s: number, e: any) => s + (e.amount || 0), 0)
    const prompt = `You are a helpful financial assistant. The user asked: "${message}". They have recorded total expenses of $${total.toFixed(2)}. Provide a concise answer (2-4 sentences).`

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // replace with the model you have access to
        messages: [{ role: 'system', content: 'You are a helpful financial assistant.' }, { role: 'user', content: prompt }],
        max_tokens: 250,
        temperature: 0.2
      })
    })

    if (!res.ok) {
      const err = await res.text()
      return NextResponse.json({ answer: `LLM error: ${err}` }, { status: 500 })
    }

    const data = await res.json()
    const answer = data?.choices?.[0]?.message?.content ?? 'Sorry, no response from LLM.'
    return NextResponse.json({ answer })
  } catch (err) {
    return NextResponse.json({ answer: 'Server error in LLM route.' }, { status: 500 })
  }
}
