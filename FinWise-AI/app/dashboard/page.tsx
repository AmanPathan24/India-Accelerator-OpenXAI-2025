'use client'
import { useEffect, useState } from 'react'
import ExpenseForm from '../../components/ExpenseForm'
import ExpenseList from '../../components/ExpenseList'
import SummaryCards from '../../components/SummaryCards'
import CategoryDoughnut from '../../components/CategoryDoughnut'
import { loadExpenses, saveExpenses } from '../../lib/storage'
import { Expense } from '../../types'

export default function DashboardPage() {
  const [expenses, setExpenses] = useState<Expense[]>([])

  useEffect(() => {
    setExpenses(loadExpenses())
  }, [])

  useEffect(() => {
    saveExpenses(expenses)
  }, [expenses])

  function handleAdd(exp: Expense) {
    setExpenses(prev => [exp, ...prev])
  }

  function handleDelete(id: number) {
    setExpenses(prev => prev.filter(e => e.id !== id))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Financial Dashboard</h1>
        <p className="text-gray-600">Track your expenses and get AI-powered insights</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <ExpenseForm onAdd={handleAdd} />
        </div>

        <div className="lg:col-span-2 space-y-6">
          <SummaryCards expenses={expenses} />
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Spending by Category</h2>
            <div className="chart-container">
              <CategoryDoughnut expenses={expenses} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Expenses</h2>
            <ExpenseList expenses={expenses} onDelete={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  )
}
