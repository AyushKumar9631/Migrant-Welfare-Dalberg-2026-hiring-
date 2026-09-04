import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">SAATHI Project</h3>
            <p className="text-gray-400 mb-4">
              Improving welfare access for 500,000+ urban migrants in Patna through evidence-based interventions.
            </p>
            <p className="text-sm text-gray-500">
              Assignment submission demonstrating technology-led and community-based solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/interventions/saathi" className="hover:text-accent transition-colors">SAATHI Solution</Link></li>
              <li><Link href="/interventions/praman" className="hover:text-accent transition-colors">PRAMAN Solution</Link></li>
              <li><Link href="/compare" className="hover:text-accent transition-colors">Compare Options</Link></li>
              <li><Link href="/assistant" className="hover:text-accent transition-colors">AI Assistant</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/resources" className="hover:text-accent transition-colors">Welfare Schemes</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Project</Link></li>
              <li><a href="https://jansamarth.in/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Jan Samarth Portal</a></li>
              <li><a href="https://uidai.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Aadhaar Services</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2026 SAATHI Project. Assignment submission for welfare access initiative.
          </p>
          <p className="text-gray-500 text-sm mt-4 sm:mt-0">
            Built with Next.js, deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}
