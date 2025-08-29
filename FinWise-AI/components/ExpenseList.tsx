'use client'
import { Expense } from '../types'

export default function ExpenseList({ expenses, onDelete }: { expenses: Expense[], onDelete: (id: number) => void }) {
  if (!expenses || expenses.length === 0) {
    return <div className="text-center text-gray-500 py-8">No expenses yet. Add your first expense to get started!</div>
  }

  return (
    <div className="space-y-3">
      {expenses.slice(0, 10).map(exp => (
        <div key={exp.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              {exp.category === 'food' ? '🍽️' : exp.category === 'transport' ? '🚗' : exp.category === 'entertainment' ? '🎮' : '💡'}
            </div>
            <div>
              <p className="font-medium text-gray-900">{exp.description}</p>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 text-xs rounded-full bg-gray-100">{exp.category}</span>
                <span className="text-sm text-gray-500">{new Date(exp.date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold text-gray-900">${exp.amount.toFixed(2)}</span>
            <button onClick={() => onDelete(exp.id)} className="text-red-500 hover:text-red-700">🗑️</button>
          </div>
        </div>
      ))}
    </div>
  )
}
