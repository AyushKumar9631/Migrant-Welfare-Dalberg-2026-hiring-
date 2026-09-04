import { Users, MapPin, Truck, Home, Heart, FileText } from 'lucide-react'
import Link from 'next/link'

export default function PramanPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="mx-auto mb-6" size={64} />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">PRAMAN</h1>
            <p className="text-2xl mb-2">Community Documentation Network</p>
            <p className="text-xl text-gray-100 mb-8">Human touch for human needs</p>

            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <span className="font-bold">100,000+</span> direct assistance
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <span className="font-bold">₹500</span> per user
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <span className="font-bold">4 months</span> to scale
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Components */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How PRAMAN Works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <Home className="text-primary mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">50 Documentation Centers</h3>
              <p className="text-gray-600 mb-4">
                Located within migrant communities - slums, labor colonies, construction sites
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Free photocopying & printing</li>
                <li>• Notary & attestation services</li>
                <li>• Biometric enrollment stations</li>
                <li>• Application form assistance</li>
                <li>• Direct government liaison</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <Users className="text-primary mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">200 Community Fellows</h3>
              <p className="text-gray-600 mb-4">
                Trained grassroots workers from migrant communities themselves
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Door-to-door awareness campaigns</li>
                <li>• Group information sessions</li>
                <li>• Accompany to govt offices</li>
                <li>• Troubleshoot rejections</li>
                <li>• Monthly follow-up</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <Truck className="text-primary mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">10 Mobile Vans</h3>
              <p className="text-gray-600 mb-4">
                Equipped vans circulating across Patna reaching migrants where they work
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• On-spot document capture</li>
                <li>• Mini-enrollment camps</li>
                <li>• Awareness sessions</li>
                <li>• Direct govt representation</li>
                <li>• Visit construction sites & markets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Services Offered</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MapPin, title: 'Door-to-Door Awareness', desc: 'Fellows visit homes to explain schemes and eligibility' },
              { icon: FileText, title: 'Document Facilitation', desc: 'Help obtaining Aadhaar, ration cards, domicile certificates' },
              { icon: Heart, title: 'Application Assistance', desc: 'Fill forms, submit applications, track progress' },
              { icon: Users, title: 'Government Liaison', desc: 'Dedicated team to smooth bureaucratic processes' },
              { icon: Truck, title: 'Mobile Services', desc: 'Bring services to construction sites and markets' },
              { icon: Home, title: 'Community Verification', desc: 'Neighbors vouch for residence through formal process' }
            ].map((service, idx) => {
              const Icon = service.icon
              return (
                <div key={idx} className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl">
                  <Icon className="text-primary mb-3" size={36} />
                  <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Projections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Expected Impact (24 Months)</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">100K+</div>
              <div className="text-gray-600">Direct Assistance</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">70%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">₹40Cr+</div>
              <div className="text-gray-600">Benefits Delivered</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">3 weeks</div>
              <div className="text-gray-600">Enrollment Time (from 3mo)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Human Touch Matters */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Why Human Touch Matters</h2>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-xl">
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                <strong>Trust Building:</strong> Face-to-face interaction creates trust faster than technology, especially with vulnerable populations who may be skeptical of digital platforms.
              </p>
              <p className="text-lg">
                <strong>Zero Digital Literacy Required:</strong> No smartphone, no internet, no problem. Fellows guide every step physically.
              </p>
              <p className="text-lg">
                <strong>Complex Case Resolution:</strong> Human intermediaries can navigate bureaucracy, appeal rejections, and solve unique documentation challenges.
              </p>
              <p className="text-lg">
                <strong>Immediate Impact:</strong> Scales faster than technology adoption - fellows can start helping within weeks of training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Community-Powered Solution</h2>
          <p className="text-xl mb-8">PRAMAN puts people first - trusted faces, familiar voices, human compassion</p>
          <Link
            href="/compare"
            className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Compare with SAATHI
          </Link>
        </div>
      </section>
    </div>
  )
}
