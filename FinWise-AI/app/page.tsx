import Link from 'next/link'

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="text-6xl text-indigo-600 mb-6">📈</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Personalized Finance Assistant</h1>
          <p className="text-xl text-gray-600 mb-8">Track expenses, get AI insights, and achieve your financial goals.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl text-indigo-600 mb-4">🧾</div>
            <h3 className="text-xl font-semibold mb-3">Expense Tracking</h3>
            <p className="text-gray-600">Easily track and categorize your daily expenses</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl text-purple-600 mb-4">🧠</div>
            <h3 className="text-xl font-semibold mb-3">AI Insights</h3>
            <p className="text-gray-600">Get personalized budget recommendations</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl text-green-600 mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-3">Visual Analytics</h3>
            <p className="text-gray-600">Beautiful charts to understand your spending</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-xl max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Demo Sign In</h2>
          <p className="text-sm mb-4 text-gray-600">This demo uses browser storage for authentication. Use any email/password.</p>
          <Link href="/dashboard" className="w-full inline-block btn-primary text-white py-3 rounded-lg font-semibold hover:transform hover:scale-105 transition-all text-center bg-gradient-to-r from-indigo-500 to-purple-600">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}
