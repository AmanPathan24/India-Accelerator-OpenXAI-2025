import { Expense } from '../types'

export default function SummaryCards({ expenses }: { expenses: Expense[] }) {
  const total = expenses.reduce((s, e) => s + e.amount, 0)
  const curMonth = new Date().getMonth()
  const curYear = new Date().getFullYear()
  const monthTotal = expenses.filter(e => {
    const d = new Date(e.date)
    return d.getMonth() === curMonth && d.getFullYear() === curYear
  }).reduce((s, e) => s + e.amount, 0)

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Spent</p>
            <p className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</p>
          </div>
          <div className="text-3xl text-green-500">💵</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">This Month</p>
            <p className="text-2xl font-bold text-gray-900">${monthTotal.toFixed(2)}</p>
          </div>
          <div className="text-3xl text-blue-500">📅</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Transactions</p>
            <p className="text-2xl font-bold text-gray-900">{expenses.length}</p>
          </div>
          <div className="text-3xl text-purple-500">🧾</div>
        </div>
      </div>
    </div>
  )
}
