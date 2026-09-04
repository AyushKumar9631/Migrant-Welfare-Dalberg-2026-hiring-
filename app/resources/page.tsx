import { ExternalLink, FileText, Phone, MapPin } from 'lucide-react'

export default function ResourcesPage() {
  const schemes = [
    {
      name: 'Ayushman Bharat (PM-JAY)',
      category: 'Health',
      description: 'Free health insurance up to ₹5 lakh per family per year',
      eligibility: 'Based on SECC database, covers economically vulnerable families',
      benefits: 'Cashless hospitalization at empanelled hospitals',
      howToApply: 'Visit nearest Ayushman Bharat center with Aadhaar and family details',
      link: 'https://pmjay.gov.in/'
    },
    {
      name: 'Pradhan Mantri Awas Yojana (PMAY-Urban)',
      category: 'Housing',
      description: 'Affordable housing subsidy for urban poor',
      eligibility: 'EWS/LIG families without pucca house',
      benefits: 'Interest subsidy on home loans, direct assistance',
      howToApply: 'Apply online at PMAY portal or through CSC',
      link: 'https://pmaymis.gov.in/'
    },
    {
      name: 'One Nation One Ration Card',
      category: 'Food Security',
      description: 'Portable ration card system allowing PDS access anywhere in India',
      eligibility: 'Existing ration card holders',
      benefits: 'Access subsidized food grains at any Fair Price Shop',
      howToApply: 'Update mobile number on existing ration card',
      link: 'https://www.nfsa.gov.in/'
    },
    {
      name: 'Bihar Mukhyamantri Nischay Swayam Sahayata Bhatta Yojana',
      category: 'Employment',
      description: 'Unemployment allowance for educated youth in Bihar',
      eligibility: '12th pass, age 20-25, unemployed',
      benefits: '₹1,000 per month for 2 years',
      howToApply: 'Apply at district employment office',
      link: '#'
    },
    {
      name: 'Bihar Student Credit Card',
      category: 'Education',
      description: 'Education loan for higher studies',
      eligibility: 'Bihar domicile, passed 12th, admission in recognized institution',
      benefits: 'Loan up to ₹4 lakh at 4% interest',
      howToApply: 'Apply online at Bihar Student Credit Card portal',
      link: 'https://www.7nishchay-yuvaupmission.bihar.gov.in/'
    },
    {
      name: 'PM-KISAN',
      category: 'Agriculture',
      description: 'Direct income support for farmers',
      eligibility: 'Small and marginal farmers with cultivable land',
      benefits: '₹6,000 per year in 3 installments',
      howToApply: 'Register at PM-KISAN portal with land documents',
      link: 'https://pmkisan.gov.in/'
    }
  ]

  const externalLinks = [
    { name: 'Jan Samarth Portal', desc: 'Unified portal for credit-linked government schemes', url: 'https://jansamarth.in/' },
    { name: 'e-District Bihar', desc: 'Online certificates and services in Bihar', url: 'https://serviceonline.bihar.gov.in/' },
    { name: 'Aadhaar Services', desc: 'Update Aadhaar, find enrollment centers', url: 'https://uidai.gov.in/' },
    { name: 'CSC Locator', desc: 'Find nearest Common Service Center', url: 'https://www.csc.gov.in/' },
    { name: 'Bihar Labour Department', desc: 'Labour welfare schemes and registration', url: 'https://labour.bihar.gov.in/' },
    { name: 'e-Shram Portal', desc: 'National database for unorganized workers', url: 'https://eshram.gov.in/' }
  ]

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Resources for Migrants
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Information about government schemes, eligibility, and how to apply
          </p>
        </div>

        {/* Government Schemes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <FileText className="mr-3 text-primary" size={32} />
            Government Welfare Schemes
          </h2>

          <div className="space-y-6">
            {schemes.map((scheme, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{scheme.name}</h3>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                      {scheme.category}
                    </span>
                  </div>
                  {scheme.link !== '#' && (
                    <a
                      href={scheme.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 md:mt-0 inline-flex items-center text-primary hover:text-dark font-semibold"
                    >
                      Visit Portal
                      <ExternalLink className="ml-2" size={16} />
                    </a>
                  )}
                </div>

                <p className="text-gray-700 mb-4">{scheme.description}</p>

                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Eligibility:</h4>
                    <p className="text-gray-600">{scheme.eligibility}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <p className="text-gray-600">{scheme.benefits}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">How to Apply:</h4>
                    <p className="text-gray-600">{scheme.howToApply}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Documentation Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <FileText className="mr-3 text-solution" size={32} />
            Common Documentation Requirements
          </h2>

          <div className="bg-solution/5 border-2 border-solution/20 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Identity Proof</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Aadhaar Card (most important)</li>
                  <li>• Voter ID</li>
                  <li>• PAN Card</li>
                  <li>• Driving License</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Address Proof</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Aadhaar with current address</li>
                  <li>• Rent agreement (if available)</li>
                  <li>• Utility bills (electricity, water)</li>
                  <li>• Employer certificate</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Income Proof</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Salary slips (for formal employment)</li>
                  <li>• Self-declaration affidavit</li>
                  <li>• Bank statements</li>
                  <li>• Employer certificate</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Other Documents</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Caste certificate (if applicable)</li>
                  <li>• Bank account details</li>
                  <li>• Mobile number (linked to Aadhaar)</li>
                  <li>• Passport size photos</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg">
              <p className="text-sm font-semibold text-solution mb-2">What if you don't have documents?</p>
              <p className="text-sm text-gray-600">
                Contact nearest CSC or document facilitation center for help. Self-attestation and community verification may be accepted in some cases.
              </p>
            </div>
          </div>
        </section>

        {/* External Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <ExternalLink className="mr-3 text-evidence" size={32} />
            Useful External Links
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {externalLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all group"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {link.name}
                  <ExternalLink className="inline ml-2" size={16} />
                </h3>
                <p className="text-gray-600 text-sm">{link.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Help Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Need Help?</h2>
          <p className="text-center text-gray-100 mb-6">
            Can't find what you're looking for? Try our AI assistant or explore our intervention solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/assistant"
              className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors text-center"
            >
              Ask AI Assistant
            </a>
            <a
              href="/interventions/saathi"
              className="px-6 py-3 bg-dark text-white font-semibold rounded-lg hover:bg-dark/90 transition-colors text-center"
            >
              Learn About SAATHI
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
