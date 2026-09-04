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

      const systemPrompt = `You are a concise welfare assistant for urban migrants in Patna, Bihar.

CRITICAL RULES:
1. Keep responses under 3 sentences
2. When mentioning schemes, return JSON format with scheme buttons
3. Be friendly but brief
4. No tables, no long lists

JSON FORMAT when mentioning schemes:
{
  "message": "Brief 2-3 sentence response",
  "schemes": [
    {
      "name": "Scheme Name",
      "category": "Health/Housing/Finance/Food",
      "benefit": "One line benefit",
      "eligibility": "Brief eligibility"
    }
  ]
}

For general questions, return plain text (not JSON).

Examples:
User: "Tell me about health schemes"
Assistant: {"message": "There are 2 main health schemes for migrants in Patna. Click the buttons below to learn more.", "schemes": [{"name": "Ayushman Bharat", "category": "Health", "benefit": "Free treatment up to ₹5 lakh", "eligibility": "All BPL families"}]}

User: "How do I apply?"
Assistant: Visit the nearest Common Service Center with your Aadhaar card and a passport photo. They'll help you apply for free.`

      const completion = await groq.chat.completions.create({
        messages: [
          { role: 'system', content: systemPrompt },
          ...history.slice(-6),
          { role: 'user', content: message }
        ],
        model: 'openai/gpt-oss-120b',
        temperature: 0.5,
        max_tokens: 500,
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
