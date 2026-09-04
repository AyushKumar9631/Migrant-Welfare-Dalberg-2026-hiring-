import { Smartphone, Mic, FileCheck, MapPin, Users, Globe } from 'lucide-react'
import Link from 'next/link'

export default function SaathiPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-solution to-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Smartphone className="mx-auto mb-6" size={64} />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">SAATHI</h1>
            <p className="text-2xl mb-2">Your Digital Welfare Navigator</p>
            <p className="text-xl text-gray-100 mb-8">AI-powered assistance for every migrant</p>

            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <span className="font-bold">200,000+</span> users
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <span className="font-bold">₹250</span> per user
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <span className="font-bold">9 months</span> to scale
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How SAATHI Works</h2>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: 1, title: 'Discover Schemes', desc: 'Voice or text search in your language', icon: Mic },
              { step: 2, title: 'Check Eligibility', desc: 'Answer simple questions', icon: FileCheck },
              { step: 3, title: 'Get Guidance', desc: 'Step-by-step instructions', icon: MapPin },
              { step: 4, title: 'Document Help', desc: 'Digital wallet & self-attestation', icon: FileCheck },
              { step: 5, title: 'Track Status', desc: 'Monitor your application', icon: Users }
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="text-center">
                  <div className="bg-solution text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <Icon className="mx-auto mb-3 text-solution" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Features</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-solution/10 to-accent/10 p-8 rounded-xl">
              <Globe className="text-solution mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multilingual Voice Interface</h3>
              <p className="text-gray-600 mb-4">
                Speak in Hindi, Bhojpuri, Maithili, or 8 other languages. Voice-first design for low-literacy users.
              </p>
              <Link href="/assistant" className="text-solution font-semibold hover:underline">
                Try Demo →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-solution/10 to-accent/10 p-8 rounded-xl">
              <Smartphone className="text-solution mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Chatbot Assistant</h3>
              <p className="text-gray-600 mb-4">
                24/7 availability, instant answers about schemes, eligibility checker, application guidance.
              </p>
              <Link href="/assistant" className="text-solution font-semibold hover:underline">
                Try Demo →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-solution/10 to-accent/10 p-8 rounded-xl">
              <FileCheck className="text-solution mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Documentation</h3>
              <p className="text-gray-600 mb-4">
                Digital document wallet, self-attestation module, temporary address proof generation, Aadhaar update facilitation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-solution/10 to-accent/10 p-8 rounded-xl">
              <MapPin className="text-solution mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">25 Physical Support Hubs</h3>
              <p className="text-gray-600 mb-4">
                Saathi Seva Kendras in migrant areas with free phone/tablet access, assisted filling, biometric support.
              </p>
            </div>

            <div className="bg-gradient-to-br from-solution/10 to-accent/10 p-8 rounded-xl">
              <Users className="text-solution mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Ambassadors</h3>
              <p className="text-gray-600 mb-4">
                100 trained migrant workers spreading awareness, WhatsApp integration, IVR system for feature phones.
              </p>
            </div>

            <div className="bg-gradient-to-br from-solution/10 to-accent/10 p-8 rounded-xl">
              <Globe className="text-solution mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Offline-First Design</h3>
              <p className="text-gray-600 mb-4">
                Works with limited connectivity, SMS fallback for feature phones, icon-based navigation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Projections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Expected Impact (24 Months)</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-solution mb-2">200K+</div>
              <div className="text-gray-600">Users Registered</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-solution mb-2">75%</div>
              <div className="text-gray-600">Application Success Rate</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-solution mb-2">₹50Cr+</div>
              <div className="text-gray-600">Benefits Delivered</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-solution mb-2">75%</div>
              <div className="text-gray-600">Time Saved per Application</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-solution to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience SAATHI</h2>
          <p className="text-xl mb-8">Try our AI assistant to see how technology can simplify welfare access</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/assistant"
              className="px-8 py-4 bg-white text-solution font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Try AI Assistant
            </Link>
            <Link
              href="/compare"
              className="px-8 py-4 bg-dark text-white font-semibold rounded-lg hover:bg-primary transition-colors"
            >
              Compare with PRAMAN
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
