import { Expense } from '../types'

const KEY = 'expenses'

export function loadExpenses(): Expense[] {
  if (typeof window === 'undefined') return []
  const raw = localStorage.getItem(KEY)
  return raw ? JSON.parse(raw) : []
}

export function saveExpenses(expenses: Expense[]) {
  if (typeof window === 'undefined') return
  localStorage.setItem(KEY, JSON.stringify(expenses))
}
