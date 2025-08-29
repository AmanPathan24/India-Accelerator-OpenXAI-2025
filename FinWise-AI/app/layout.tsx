import './globals.css'
import { ReactNode } from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Personalized Finance Assistant',
  description: 'Track expenses and get AI-powered insights'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <nav className="bg-white shadow-lg border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-4">
                <span className="text-2xl text-indigo-600">💼</span>
                <h1 className="text-xl font-bold text-gray-800">Finance Assistant</h1>
              </div>
              <div className="flex items-center space-x-6">
                <Link href="/dashboard" className="text-gray-600 hover:text-indigo-600">Dashboard</Link>
                <Link href="/chat" className="text-gray-600 hover:text-indigo-600">AI Chat</Link>
                <Link href="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
