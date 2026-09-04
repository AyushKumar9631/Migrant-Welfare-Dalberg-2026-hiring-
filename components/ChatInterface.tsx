'use client'

import { useState } from 'react'
import { Send, Loader2, MessageCircle } from 'lucide-react'

interface Scheme {
  name: string
  category: string
  benefit: string
  eligibility: string
}

interface Message {
  role: 'user' | 'assistant'
  content: string
  schemes?: Scheme[]
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your welfare assistant. I can help you understand government schemes, check eligibility, and guide you through application processes. How can I help you today?'
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const quickQuestions = [
    'What schemes am I eligible for?',
    'How do I get a ration card?',
    'Tell me about Ayushman Bharat',
    'How to update Aadhaar address?'
  ]

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || input.trim()
    if (!textToSend || isLoading) return

    const userMessage: Message = { role: 'user', content: textToSend }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: messages.slice(-6) // Last 3 exchanges for context
        })
      })

      const data = await response.json()

      if (data.error) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: `Error: ${data.error}`
        }])
      } else {
        // Try to parse JSON response for schemes
        let responseText = data.response
        try {
          // Try to parse as JSON
          const parsed = JSON.parse(responseText)
          if (parsed.message && parsed.schemes) {
            setMessages(prev => [...prev, {
              role: 'assistant',
              content: parsed.message,
              schemes: parsed.schemes
            }])
          } else {
            setMessages(prev => [...prev, {
              role: 'assistant',
              content: responseText
            }])
          }
        } catch {
          // Not valid JSON, check if it looks like partial JSON
          if (responseText.includes('{') && responseText.includes('"schemes"')) {
            // Looks like JSON but incomplete - show as plain text
            setMessages(prev => [...prev, {
              role: 'assistant',
              content: responseText
            }])
          } else {
            // Plain text response
            setMessages(prev => [...prev, {
              role: 'assistant',
              content: responseText
            }])
          }
        }
      }
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again or check if the API key is configured correctly in Vercel environment variables.'
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 flex items-center">
        <MessageCircle className="mr-3" size={24} />
        <div>
          <h3 className="font-bold text-lg">SAATHI AI Assistant</h3>
          <p className="text-sm text-gray-100">Ask about welfare schemes</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] ${
                message.role === 'user'
                  ? 'bg-primary text-white rounded-lg p-3'
                  : ''
              }`}
            >
              {message.role === 'user' ? (
                <p className="whitespace-pre-wrap">{message.content}</p>
              ) : (
                <div>
                  <div className="bg-gray-100 text-gray-900 rounded-lg p-3 mb-2">
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                  {message.schemes && message.schemes.length > 0 && (
                    <div className="space-y-2">
                      {message.schemes.map((scheme, idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-r from-solution/10 to-accent/10 border-l-4 border-solution rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-900 mb-1">{scheme.name}</h4>
                              <span className="inline-block px-2 py-0.5 bg-solution/20 text-solution text-xs font-semibold rounded-full mb-2">
                                {scheme.category}
                              </span>
                              <p className="text-sm text-gray-700 mb-1">
                                <strong>Benefit:</strong> {scheme.benefit}
                              </p>
                              <p className="text-xs text-gray-600">
                                <strong>Eligibility:</strong> {scheme.eligibility}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg p-3 flex items-center">
              <Loader2 className="animate-spin mr-2" size={16} />
              <span className="text-gray-600">Thinking...</span>
            </div>
          </div>
        )}
      </div>

      {/* Quick Questions */}
      {messages.length === 1 && (
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <p className="text-sm text-gray-600 mb-2">Quick questions:</p>
          <div className="flex flex-wrap gap-2">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleSend(question)}
                className="text-sm px-3 py-1 bg-white border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your question..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            disabled={isLoading}
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            {isLoading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                <Send size={20} />
                <span className="ml-2 hidden sm:inline">Send</span>
              </>
            )}
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          This is an AI assistant. Always verify information with official sources.
        </p>
      </div>
    </div>
  )
}
