import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { notes } = await req.json()

    if (!notes) {
      return NextResponse.json({ error: 'Notes are required' }, { status: 400 })
    }

    const prompt = `Create flashcards from the following notes. Generate 5-8 flashcards in JSON format with the following structure:
{
  "flashcards": [
    { "front": "Question or term", "back": "Answer or definition" }
  ]
}
Notes: ${notes}`

    // Timeout handling
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 30000)

    const response = await fetch('http://127.0.0.1:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'llama3', prompt, stream: false }),
      signal: controller.signal,
    })

    clearTimeout(timeout)

    if (!response.ok) {
      throw new Error(`Ollama error: ${response.statusText}`)
    }

    const data = await response.json()

    // Try parsing JSON inside model’s response
    const flashcardsMatch = data.response.match(/\{[\s\S]*\}/)
    if (flashcardsMatch) {
      try {
        const flashcardsData = JSON.parse(flashcardsMatch[0])
        return NextResponse.json(flashcardsData)
      } catch {}
    }

    return NextResponse.json({
      flashcards: [
        { front: 'Generated from your notes', back: data.response || 'No response' },
      ],
    })
  } catch (error) {
    console.error('Flashcards API error:', error)
    return NextResponse.json({ error: 'Failed to generate flashcards' }, { status: 500 })
  }
}
