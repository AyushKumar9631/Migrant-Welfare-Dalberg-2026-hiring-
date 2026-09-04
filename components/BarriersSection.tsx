import { FileX, Volume2 } from 'lucide-react'

export default function BarriersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Two Critical Barriers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our research identified two root causes preventing welfare access
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Barrier 1 */}
          <div className="bg-barrier/5 border-2 border-barrier/20 rounded-xl p-8">
            <div className="flex items-start mb-4">
              <FileX className="text-barrier mr-4 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-barrier mb-2">
                  1. Documentation Gaps
                </h3>
                <p className="text-lg font-semibold text-gray-700 mb-4">
                  The Catch-22: Need proof to get benefits, need benefits to get proof
                </p>
              </div>
            </div>

            <div className="space-y-3 text-gray-700">
              <div className="flex items-start">
                <span className="text-barrier mr-2">•</span>
                <span>Aadhaar registered at origin addresses, not current location</span>
              </div>
              <div className="flex items-start">
                <span className="text-barrier mr-2">•</span>
                <span>No formal rental agreements in informal settlements</span>
              </div>
              <div className="flex items-start">
                <span className="text-barrier mr-2">•</span>
                <span>Ration card portability failures despite ONORC scheme</span>
              </div>
              <div className="flex items-start">
                <span className="text-barrier mr-2">•</span>
                <span>Circular migration prevents permanent documentation</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-barrier/10 rounded-lg">
              <p className="text-sm font-bold text-barrier">
                Impact: 70% of migrants lack required documents
              </p>
            </div>
          </div>

          {/* Barrier 2 */}
          <div className="bg-barrier/5 border-2 border-barrier/20 rounded-xl p-8">
            <div className="flex items-start mb-4">
              <Volume2 className="text-barrier mr-4 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-barrier mb-2">
                  2. Awareness & Information Gap
                </h3>
                <p className="text-lg font-semibold text-gray-700 mb-4">
                  Migrants don't know schemes exist or how to apply
                </p>
              </div>
            </div>

            <div className="space-y-3 text-gray-700">
              <div className="flex items-start">
                <span className="text-barrier mr-2">•</span>
                <span>Language barriers (Bhojpuri, Maithili speakers face Hindi/English forms)</span>
              </div>
              <div className="flex items-start">
                <span className="text-barrier mr-2">•</span>
                <span>Digital divide: 60% lack smartphones, limited internet access</span>
              </div>
              <div className="flex items-start">
                <span className="text-barrier mr-2">•</span>
                <span>Zero targeted outreach to informal settlements</span>
              </div>
              <div className="flex items-start">
                <span className="text-barrier mr-2">•</span>
                <span>Low literacy rates + complex bureaucratic procedures</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-barrier/10 rounded-lg">
              <p className="text-sm font-bold text-barrier">
                Impact: 80% unaware of eligible schemes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
