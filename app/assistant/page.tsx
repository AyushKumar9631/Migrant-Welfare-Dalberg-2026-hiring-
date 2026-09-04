import ChatInterface from '@/components/ChatInterface'
import { MessageCircle, Sparkles, Globe, Zap } from 'lucide-react'

export default function AssistantPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-4 rounded-full">
              <MessageCircle className="text-primary" size={48} />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            AI Welfare Assistant
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get instant answers about government schemes, eligibility, and application processes
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg text-center">
            <Sparkles className="mx-auto mb-3 text-accent" size={32} />
            <h3 className="font-semibold text-gray-900 mb-2">AI-Powered</h3>
            <p className="text-sm text-gray-600">Smart responses using latest AI technology</p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center">
            <Globe className="mx-auto mb-3 text-solution" size={32} />
            <h3 className="font-semibold text-gray-900 mb-2">Multilingual</h3>
            <p className="text-sm text-gray-600">Ask in English or Hindi</p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center">
            <Zap className="mx-auto mb-3 text-primary" size={32} />
            <h3 className="font-semibold text-gray-900 mb-2">Instant Answers</h3>
            <p className="text-sm text-gray-600">Get responses in seconds</p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center">
            <MessageCircle className="mx-auto mb-3 text-evidence" size={32} />
            <h3 className="font-semibold text-gray-900 mb-2">24/7 Available</h3>
            <p className="text-sm text-gray-600">Ask anytime, anywhere</p>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="max-w-4xl mx-auto">
          <ChatInterface />
        </div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> This is an AI-powered assistant for demonstration purposes.
            Always verify information with official government sources before taking action.
            For actual applications, visit official portals or contact authorized centers.
          </p>
        </div>

        {/* What You Can Ask */}
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What You Can Ask</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Scheme Information</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• "What is Ayushman Bharat?"</li>
                <li>• "Tell me about PMAY housing scheme"</li>
                <li>• "What schemes are available for migrants?"</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Eligibility Questions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• "Am I eligible for PM-KISAN?"</li>
                <li>• "What documents do I need for ration card?"</li>
                <li>• "Who can get health insurance?"</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Application Help</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• "How do I apply for Aadhaar?"</li>
                <li>• "Steps to get a ration card"</li>
                <li>• "Where do I submit my application?"</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Documentation Issues</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• "How to update Aadhaar address?"</li>
                <li>• "What if I don't have rental agreement?"</li>
                <li>• "Can I use alternative address proof?"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
