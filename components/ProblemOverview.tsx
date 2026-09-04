export default function ProblemOverview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The Challenge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Despite eligibility, low-income urban migrants in Patna face systematic exclusion from government welfare benefits worth crores annually
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Who Are They?</h3>
            <p className="text-gray-600">
              Construction workers, domestic workers, street vendors, and factory workers who migrated from rural Bihar and neighboring states seeking better opportunities
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">What They Need</h3>
            <p className="text-gray-600">
              Access to ration cards, health insurance (Ayushman Bharat), housing subsidies (PMAY), skill development programs, and income support schemes
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="text-4xl mb-4">🚧</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">What Stops Them</h3>
            <p className="text-gray-600">
              Missing documentation, lack of awareness about available schemes, complex application processes, and language barriers create insurmountable obstacles
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
