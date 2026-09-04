import { FileText, Target, MapPin, TrendingUp, AlertCircle } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About This Project
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evidence-based approach to improving welfare access for urban migrants in Patna
          </p>
        </div>

        {/* The Challenge */}
        <section className="mb-16">
          <div className="bg-barrier/5 border-l-4 border-barrier p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertCircle className="mr-3 text-barrier" size={32} />
              The Challenge
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p className="text-lg mb-4">
                Over 500,000 low-income urban migrants in Patna, Bihar, are systematically excluded from government welfare benefits despite being eligible. Current enrollment stands at less than 30%.
              </p>
              <p className="text-lg mb-4">
                These migrants—construction workers, domestic workers, street vendors, and factory workers—moved from rural Bihar and neighboring states seeking better opportunities. They work in the informal economy, live in informal settlements, and face two critical barriers:
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-xl text-barrier mb-3">1. Documentation Gaps</h3>
                  <p>A catch-22: need address proof to access benefits, but need stable residence to get proof. 70% lack required documents.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-xl text-barrier mb-3">2. Awareness Gaps</h3>
                  <p>Migrants don't know schemes exist or how to apply. Language barriers, low digital literacy, and zero outreach compound the problem. 80% are unaware of eligible schemes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Patna */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <MapPin className="mr-3 text-primary" size={32} />
            Why Patna?
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-lg text-gray-700 mb-4">
              Patna, as Bihar's capital and largest city, attracts significant internal migration. The city represents a microcosm of India's urban migration challenges:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>High concentration of migrants from rural Bihar and neighboring states</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Large informal economy with construction booms and service sector growth</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Existing digital infrastructure (Common Service Centers) that can be leveraged</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>State government interest in improving welfare delivery and reducing migration outflows</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Project Details */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Target className="mr-3 text-solution" size={32} />
            Project Details
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-solution/5 p-6 rounded-lg">
              <div className="text-4xl font-bold text-solution mb-2">₹5 Crore</div>
              <p className="text-gray-700">Total investment for intervention over 24 months</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">24 Months</div>
              <p className="text-gray-700">Timeline to demonstrate measurable results</p>
            </div>
            <div className="bg-accent/5 p-6 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">200K+</div>
              <p className="text-gray-700">Target beneficiaries (SAATHI approach)</p>
            </div>
          </div>
        </section>

        {/* Two Intervention Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <TrendingUp className="mr-3 text-evidence" size={32} />
            Two Intervention Options
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-solution/20 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-solution mb-4">SAATHI - Digital Navigator</h3>
              <p className="text-gray-700 mb-4">
                Technology-led solution combining AI-powered mobile app, 25 physical support centers, and smart documentation tools.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Voice-based multilingual interface</li>
                <li>• AI chatbot for 24/7 assistance</li>
                <li>• Digital document wallet with self-attestation</li>
                <li>• Temporary address proof generation</li>
                <li>• WhatsApp integration</li>
              </ul>
              <div className="bg-solution/10 p-4 rounded">
                <p className="text-sm font-semibold text-solution">200K+ reach | ₹250/user | 9mo scale</p>
              </div>
            </div>

            <div className="border-2 border-primary/20 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-primary mb-4">PRAMAN - Community Network</h3>
              <p className="text-gray-700 mb-4">
                Human-centered approach with 50 documentation centers, 200 trained community fellows, and 10 mobile vans.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Door-to-door awareness campaigns</li>
                <li>• Physical document facilitation</li>
                <li>• Application assistance and follow-up</li>
                <li>• Government office accompaniment</li>
                <li>• Community verification systems</li>
              </ul>
              <div className="bg-primary/10 p-4 rounded">
                <p className="text-sm font-semibold text-primary">100K+ reach | ₹500/user | 4mo scale</p>
              </div>
            </div>
          </div>
        </section>

        {/* Evidence Base */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <FileText className="mr-3 text-evidence" size={32} />
            Evidence Base
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-lg text-gray-700 mb-4">
              This proposal is grounded in extensive research on urban migration, welfare access barriers, and intervention effectiveness:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-evidence mr-2">•</span>
                <span><strong>Government data:</strong> Census migration statistics, NSSO surveys, One Nation One Ration Card implementation reports</span>
              </li>
              <li className="flex items-start">
                <span className="text-evidence mr-2">•</span>
                <span><strong>Academic research:</strong> Studies on documentation barriers, digital literacy in Bihar, welfare scheme awareness</span>
              </li>
              <li className="flex items-start">
                <span className="text-evidence mr-2">•</span>
                <span><strong>Post-COVID analysis:</strong> Migrant crisis revealed critical gaps in welfare delivery systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-evidence mr-2">•</span>
                <span><strong>NGO field reports:</strong> Ground-level insights from organizations working with migrants</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Key Assumptions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Assumptions</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Geographic scope:</strong> Patna municipal area + peri-urban migrant settlements</li>
              <li>• <strong>Target population:</strong> Internal migrants earning <₹15,000/month who moved in last 5 years</li>
              <li>• <strong>Schemes focus:</strong> Food security, health insurance, housing subsidies, skill development</li>
              <li>• <strong>Government cooperation:</strong> Bihar state government provides necessary support for integration</li>
              <li>• <strong>Infrastructure:</strong> Existing digital systems (Aadhaar, CSCs) remain accessible</li>
              <li>• <strong>Population stability:</strong> ~500,000 migrant population remains relatively stable</li>
              <li>• <strong>No policy disruptions:</strong> No major changes to welfare schemes during intervention period</li>
            </ul>
          </div>
        </section>

        {/* Assignment Context */}
        <section className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Assignment Submission</h2>
          <p className="text-gray-700 mb-4">
            This project is submitted as part of an application process. It demonstrates:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Problem Framing</h3>
              <p className="text-sm text-gray-600">Identifying root causes based on evidence and nuance</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Critical Thinking</h3>
              <p className="text-sm text-gray-600">Structured reasoning and thoughtful prioritization</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Communication</h3>
              <p className="text-sm text-gray-600">Clear, concise, and logical presentation</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
