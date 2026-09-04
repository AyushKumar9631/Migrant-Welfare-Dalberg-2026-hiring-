import Link from 'next/link'
import { MessageCircle, ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to Explore the Solution?
        </h2>
        <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
          Try our AI welfare assistant or dive deep into our intervention approaches
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/assistant"
            className="inline-flex items-center px-8 py-4 bg-white text-primary hover:bg-gray-100 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            <MessageCircle className="mr-2" size={20} />
            Try AI Assistant
          </Link>
          <Link
            href="/compare"
            className="inline-flex items-center px-8 py-4 bg-accent hover:bg-solution text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            Compare Solutions
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
