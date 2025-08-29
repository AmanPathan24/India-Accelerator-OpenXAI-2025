'use client'
import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
import { Expense } from '../types'

export default function CategoryDoughnut({ expenses }: { expenses: Expense[] }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const chartRef = useRef<any>(null)

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) return
    if (chartRef.current) chartRef.current.destroy()

    const categoryData: Record<string, number> = {}
    expenses.forEach(e => (categoryData[e.category] = (categoryData[e.category] || 0) + e.amount))

    const colors: Record<string, string> = {
      food: '#ef4444', transport: '#3b82f6', entertainment: '#8b5cf6', utilities: '#10b981', shopping: '#f59e0b', other: '#6b7280'
    }

    chartRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: Object.keys(categoryData).map(k => k.charAt(0).toUpperCase() + k.slice(1)),
        datasets: [{
          data: Object.values(categoryData),
          backgroundColor: Object.keys(categoryData).map(k => colors[k] || '#9CA3AF'),
          borderColor: '#ffffff',
          borderWidth: 2
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    })

    return () => chartRef.current?.destroy()
  }, [expenses])

  return <canvas ref={canvasRef} />
}
