import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary via-dark to-secondary text-white py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Bridging the Gap:<br />
            <span className="text-accent">Helping 500,000+ Migrants</span><br />
            Access Their Rights
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Technology-led solutions to overcome documentation barriers and awareness gaps for urban migrants in Patna
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/interventions/saathi"
              className="inline-flex items-center px-8 py-4 bg-accent hover:bg-solution text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              Explore Solutions
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/assistant"
              className="inline-flex items-center px-8 py-4 bg-white text-primary hover:bg-gray-100 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <MessageCircle className="mr-2" size={20} />
              Try AI Assistant
            </Link>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-accent">500K+</div>
            <div className="text-sm text-gray-200 mt-2">Migrants Affected</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-accent">&lt;30%</div>
            <div className="text-sm text-gray-200 mt-2">Current Enrollment</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-accent">70%</div>
            <div className="text-sm text-gray-200 mt-2">Lack Documentation</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-accent">80%</div>
            <div className="text-sm text-gray-200 mt-2">Unaware of Schemes</div>
          </div>
        </div>
      </div>
    </section>
  )
}
