import type { Metadata } from "next";
import ToastProvider from "./components/ToastProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Linker - Professional Link Management",
  description: "A modern, professional platform for managing and sharing your links efficiently",
  keywords: "link management, url shortener, social media, professional tools",
  authors: [{ name: "Linker Team" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#6366f1" },
    { media: "(prefers-color-scheme: dark)", color: "#818cf8" }
  ],
  openGraph: {
    title: "Linker - Professional Link Management",
    description: "A modern, professional platform for managing and sharing your links efficiently",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Linker - Professional Link Management",
    description: "A modern, professional platform for managing and sharing your links efficiently",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="msapplication-TileColor" content="#6366f1" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body className="antialiased font-['Inter',sans-serif] animated-bg">
        {/* Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Floating Geometric Shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full floating-element blur-sm"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full floating-element blur-sm" style={{animationDelay: '-1s'}}></div>
          <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full floating-element blur-sm" style={{animationDelay: '-2s'}}></div>
          <div className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full floating-element blur-sm" style={{animationDelay: '-4s'}}></div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl floating-element"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl floating-element" style={{animationDelay: '-3s'}}></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* Navigation Bar */}
          <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism mx-4 mt-4 rounded-2xl">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">L</span>
                  </div>
                  <span className="font-bold text-xl logo-text">Linker</span>
                </div>
                <div className="hidden md:flex items-center space-x-6">
                  <a href="#features" className="text-sm font-medium hover:text-indigo-500 transition-colors">Features</a>
                  <a href="#about" className="text-sm font-medium hover:text-indigo-500 transition-colors">About</a>
                  <a href="#contact" className="text-sm font-medium hover:text-indigo-500 transition-colors">Contact</a>
                </div>
                <button className="md:hidden w-6 h-6 flex flex-col justify-center">
                  <span className="w-full h-0.5 bg-current mb-1"></span>
                  <span className="w-full h-0.5 bg-current mb-1"></span>
                  <span className="w-full h-0.5 bg-current"></span>
                </button>
              </div>
            </div>
          </nav>

          {/* Main Content Area */}
          <main className="pt-24 min-h-screen">
            {children}
          </main>

          {/* Footer */}
          <footer className="relative z-10 glass-morphism mx-4 mb-4 rounded-2xl">
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">L</span>
                    </div>
                    <span className="font-bold text-2xl logo-text">Linker</span>
                  </div>
                  <p className="text-sm opacity-70 mb-4 max-w-md">
                    Professional link management made simple. Create, share, and track your links with our modern platform.
                  </p>
                  <div className="flex space-x-4">
                    <div className="w-8 h-8 rounded-lg instagram-gradient flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      <span className="text-white text-xs">IG</span>
                    </div>
                    <div className="w-8 h-8 rounded-lg twitter-gradient flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      <span className="text-white text-xs">TW</span>
                    </div>
                    <div className="w-8 h-8 rounded-lg linkedin-gradient flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      <span className="text-white text-xs">LI</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Product</h3>
                  <ul className="space-y-2 text-sm opacity-70">
                    <li><a href="#" className="hover:opacity-100 transition-opacity">Features</a></li>
                    <li><a href="#" className="hover:opacity-100 transition-opacity">Pricing</a></li>
                    <li><a href="#" className="hover:opacity-100 transition-opacity">API</a></li>
                    <li><a href="#" className="hover:opacity-100 transition-opacity">Analytics</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Support</h3>
                  <ul className="space-y-2 text-sm opacity-70">
                    <li><a href="#" className="hover:opacity-100 transition-opacity">Help Center</a></li>
                    <li><a href="#" className="hover:opacity-100 transition-opacity">Documentation</a></li>
                    <li><a href="#" className="hover:opacity-100 transition-opacity">Contact Us</a></li>
                    <li><a href="#" className="hover:opacity-100 transition-opacity">Status</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm opacity-60">© 2024 Linker. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Privacy Policy</a>
                  <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Terms of Service</a>
                  <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Cookie Policy</a>
                </div>
              </div>
            </div>
          </footer>
        </div>

        <ToastProvider />
      </body>
    </html>
  );
}