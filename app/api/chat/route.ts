import { NextResponse } from 'next/server'

// This endpoint will work with either Groq or Gemini API
export async function POST(req: Request) {
  try {
    const { message, history = [] } = await req.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Check which API key is available
    const groqKey = process.env.GROQ_API_KEY
    const geminiKey = process.env.GEMINI_API_KEY

    if (!groqKey && !geminiKey) {
      return NextResponse.json(
        { error: 'API key not configured. Please add GROQ_API_KEY or GEMINI_API_KEY to environment variables.' },
        { status: 500 }
      )
    }

    let responseText = ''

    // Use Groq if available
    if (groqKey) {
      const Groq = (await import('groq-sdk')).default
      const groq = new Groq({ apiKey: groqKey })

      const systemPrompt = `You are a helpful welfare assistant for low-income urban migrants in Patna, Bihar, India. You help them understand government schemes, check eligibility, and navigate application processes.

Available welfare schemes include:
- PM-KISAN: Direct income support for farmers
- Ayushman Bharat (PM-JAY): Health insurance up to ₹5 lakh
- PMAY (Urban): Housing subsidy for urban poor
- One Nation One Ration Card: Portable food security
- Bihar Mukhyamantri Nischay Swayam Sahayata Bhatta Yojana: Unemployment allowance (₹1,000/month)
- Bihar Student Credit Card Scheme: Education loans

Common barriers migrants face:
1. Documentation gaps (Aadhaar address mismatch, no rental agreement, ration card portability)
2. Awareness gaps (don't know schemes exist, complex procedures)

Be concise, empathetic, and practical. Ask clarifying questions when needed. Respond in the language the user uses (English or Hindi).`

      const completion = await groq.chat.completions.create({
        messages: [
          { role: 'system', content: systemPrompt },
          ...history,
          { role: 'user', content: message }
        ],
        model: 'llama3-8b-8192',
        temperature: 0.7,
        max_tokens: 1024,
      })

      responseText = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.'
    }
    // Use Gemini if Groq not available
    else if (geminiKey) {
      const { GoogleGenerativeAI } = await import('@google/generative-ai')
      const genAI = new GoogleGenerativeAI(geminiKey)
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

      const systemPrompt = `You are a helpful welfare assistant for low-income urban migrants in Patna, Bihar, India. You help them understand government schemes, check eligibility, and navigate application processes.

Available schemes: PM-KISAN, Ayushman Bharat, PMAY, One Nation One Ration Card, Bihar Nischay Yojana, Bihar Student Credit Card.

Be concise, empathetic, and practical.`

      const prompt = history.length > 0
        ? `${systemPrompt}\n\nConversation history:\n${history.map((h: any) => `${h.role}: ${h.content}`).join('\n')}\n\nUser: ${message}\n\nAssistant:`
        : `${systemPrompt}\n\nUser: ${message}\n\nAssistant:`

      const result = await model.generateContent(prompt)
      const response = result.response
      responseText = response.text()
    }

    return NextResponse.json({ response: responseText })

  } catch (error: any) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to process request. Please check your API key configuration.' },
      { status: 500 }
    )
  }
}
