import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { message, history = [] } = await req.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    const groqKey = process.env.GROQ_API_KEY
    const geminiKey = process.env.GEMINI_API_KEY

    if (!groqKey && !geminiKey) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      )
    }

    let responseText = ''

    if (groqKey) {
      const { default: Groq } = await import('groq-sdk')
      const groq = new Groq({ apiKey: groqKey })

      const systemPrompt = `You are a helpful welfare assistant for low-income urban migrants in Patna, Bihar. Help them understand schemes, check eligibility, and navigate applications. Be concise and practical.`

      const completion = await groq.chat.completions.create({
        messages: [
          { role: 'system', content: systemPrompt },
          ...history.slice(-6),
          { role: 'user', content: message }
        ],
        model: 'llama-3.3-70b-versatile',
        temperature: 0.7,
        max_tokens: 1024,
      })

      responseText = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.'
    }
    else if (geminiKey) {
      const { GoogleGenerativeAI } = await import('@google/generative-ai')
      const genAI = new GoogleGenerativeAI(geminiKey)
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

      const prompt = `You are a welfare assistant for migrants in Patna. User asks: ${message}`
      const result = await model.generateContent(prompt)
      responseText = result.response.text()
    }

    return NextResponse.json({ response: responseText })

  } catch (error) {
    console.error('Chat error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
