import { Check, X, TrendingUp, Clock, DollarSign, Smartphone, Users, Zap } from 'lucide-react'
import Link from 'next/link'

export default function ComparePage() {
  const comparison = [
    {
      dimension: 'Scalability',
      saathi: { value: 'Very High', icon: TrendingUp, color: 'text-solution' },
      praman: { value: 'Medium', icon: TrendingUp, color: 'text-primary' }
    },
    {
      dimension: 'Speed to Impact',
      saathi: { value: '9 months', icon: Clock, color: 'text-solution' },
      praman: { value: '4 months', icon: Clock, color: 'text-primary' }
    },
    {
      dimension: 'Cost per User',
      saathi: { value: '₹250', icon: DollarSign, color: 'text-solution' },
      praman: { value: '₹500', icon: DollarSign, color: 'text-primary' }
    },
    {
      dimension: 'Technology Requirement',
      saathi: { value: 'Low (voice/SMS)', icon: Smartphone, color: 'text-solution' },
      praman: { value: 'None', icon: Users, color: 'text-primary' }
    },
    {
      dimension: 'Innovation Level',
      saathi: { value: 'High (AI, digital)', icon: Zap, color: 'text-solution' },
      praman: { value: 'Conventional', icon: Users, color: 'text-primary' }
    }
  ]

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Compare Interventions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technology-led vs. Community-based: Understanding the trade-offs
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-solution/10 to-accent/10 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-solution mb-4">SAATHI (Digital)</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Target Reach:</span>
                <span className="font-bold">200,000+ users</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Cost per User:</span>
                <span className="font-bold">₹250</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Timeline to Scale:</span>
                <span className="font-bold">9 months</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Success Rate:</span>
                <span className="font-bold">75%</span>
              </div>
            </div>
            <Link
              href="/interventions/saathi"
              className="mt-6 block text-center px-6 py-3 bg-solution text-white font-semibold rounded-lg hover:bg-solution/90"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary mb-4">PRAMAN (Community)</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Target Reach:</span>
                <span className="font-bold">100,000+ direct</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Cost per User:</span>
                <span className="font-bold">₹500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Timeline to Scale:</span>
                <span className="font-bold">4 months</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Success Rate:</span>
                <span className="font-bold">70%</span>
              </div>
            </div>
            <Link
              href="/interventions/praman"
              className="mt-6 block text-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-dark"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Detailed Comparison */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Detailed Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-xl overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Dimension</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-solution">SAATHI</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-primary">PRAMAN</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparison.map((item, idx) => {
                  const SaathiIcon = item.saathi.icon
                  const PramanIcon = item.praman.icon
                  return (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.dimension}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center">
                          <SaathiIcon className={item.saathi.color} size={24} />
                          <span className="mt-2 font-medium">{item.saathi.value}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center">
                          <PramanIcon className={item.praman.color} size={24} />
                          <span className="mt-2 font-medium">{item.praman.value}</span>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Decision Framework */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">When to Choose Which?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-solution/5 border-2 border-solution/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-solution mb-4">Choose SAATHI if:</h3>
              <ul className="space-y-3">
                {[
                  'Smartphone penetration >50%',
                  'Good digital infrastructure exists',
                  'Government systems integration-ready',
                  'Long-term scale is priority',
                  'Cost per user must be minimized',
                  'Innovation showcase desired'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="text-solution mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Choose PRAMAN if:</h3>
              <ul className="space-y-3">
                {[
                  'Low digital readiness (<40%)',
                  'High need for human trust',
                  'Quick impact needed (elections)',
                  'Community structures are strong',
                  'Complex cases need advocacy',
                  'Proven model preferred'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="text-primary mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Evidence Needed */}
        <div className="bg-evidence/5 border-2 border-evidence/20 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-evidence mb-6 text-center">Evidence Needed for Decision</h2>
          <p className="text-gray-700 mb-6 text-center max-w-3xl mx-auto">
            These key data points would help determine which intervention is best for Patna:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">1. Technology Readiness</h3>
              <p className="text-sm text-gray-600">
                Smartphone penetration, digital literacy, internet access among target migrants
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">2. Cost-Effectiveness</h3>
              <p className="text-sm text-gray-600">
                Real implementation costs, scale economics, ROI comparison over time
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">3. User Preferences</h3>
              <p className="text-sm text-gray-600">
                Migration patterns, stated preferences (tech vs human), trust dynamics
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/about"
              className="px-8 py-3 bg-evidence text-white font-semibold rounded-lg hover:bg-evidence/90 inline-block"
            >
              Read Full Research
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to Try the Technology?</h2>
          <p className="text-gray-600 mb-6">Experience our AI assistant to see how SAATHI would work</p>
          <Link
            href="/assistant"
            className="px-8 py-4 bg-gradient-to-r from-solution to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all inline-block"
          >
            Try AI Assistant
          </Link>
        </div>
      </div>
    </div>
  )
}
