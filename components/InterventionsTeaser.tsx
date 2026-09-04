import Link from 'next/link'
import { Smartphone, Users, ArrowRight } from 'lucide-react'

export default function InterventionsTeaser() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Two-Pronged Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technology-led and community-based interventions, each designed to address the unique barriers migrants face
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* SAATHI */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-solution to-accent p-6">
              <Smartphone className="text-white mb-3" size={48} />
              <h3 className="text-2xl font-bold text-white mb-2">SAATHI</h3>
              <p className="text-white/90">Digital Navigator Platform</p>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                AI-powered mobile app with physical support centers, smart documentation, and multilingual assistance
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-semibold mr-2">Reach:</span> 200,000+ users
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-semibold mr-2">Cost:</span> ₹250 per user
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-semibold mr-2">Timeline:</span> 9 months to scale
                </div>
              </div>
              <Link
                href="/interventions/saathi"
                className="inline-flex items-center px-6 py-3 bg-solution text-white font-semibold rounded-lg hover:bg-solution/90 transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>

          {/* PRAMAN */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-primary to-secondary p-6">
              <Users className="text-white mb-3" size={48} />
              <h3 className="text-2xl font-bold text-white mb-2">PRAMAN</h3>
              <p className="text-white/90">Community Documentation Network</p>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                50 documentation centers, 200 trained fellows, and 10 mobile vans providing human-centered support
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-semibold mr-2">Reach:</span> 100,000+ direct assistance
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-semibold mr-2">Cost:</span> ₹500 per user
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-semibold mr-2">Timeline:</span> 4 months to scale
                </div>
              </div>
              <Link
                href="/interventions/praman"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-dark transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/compare"
            className="inline-flex items-center px-8 py-4 bg-evidence text-white font-semibold rounded-lg hover:bg-evidence/90 transition-colors shadow-lg"
          >
            Compare Both Approaches
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
