import Hero from '@/components/Hero'
import ProblemOverview from '@/components/ProblemOverview'
import BarriersSection from '@/components/BarriersSection'
import InterventionsTeaser from '@/components/InterventionsTeaser'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <ProblemOverview />
      <BarriersSection />
      <InterventionsTeaser />
      <CTASection />
    </div>
  )
}
