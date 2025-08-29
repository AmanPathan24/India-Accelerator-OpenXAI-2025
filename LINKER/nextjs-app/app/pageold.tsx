"use client";

import React, { useState, useEffect } from 'react';
import UrlInput from "./components/url-box";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [stats] = useState({
    totalLinks: '10K+',
    activeUsers: '2.5K+',
    clicksTracked: '50K+',
    uptime: '99.9%'
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            {/* Logo and Brand */}
            <div className="flex items-center justify-center space-x-6 mb-12">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl">
                  <span className="text-white font-bold text-3xl">L</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              </div>
              <div>
                <h1 className="font-bold text-6xl lg:text-8xl logo-text tracking-tight">
                  Linker
                </h1>
                <p className="text-xl lg:text-2xl opacity-70 font-light">
                  Professional Link Management
                </p>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                Transform Your
                <span className="block primary-gradient bg-clip-text text-transparent">
                  Digital Presence
                </span>
              </h2>
              <p className="text-lg lg:text-xl opacity-70 max-w-2xl mx-auto leading-relaxed">
                Create, customize, and track your links with our professional platform. 
                Built for creators, businesses, and professionals who value quality and performance.
              </p>
            </div>

            {/* URL Input Section */}
            <div className="max-w-4xl mx-auto">
              <div className="glass-morphism p-8 lg:p-12 rounded-3xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-center space-x-4 mb-8">
                    <div className="mood-indicator">🚀</div>
                    <h3 className="text-2xl lg:text-3xl font-semibold">
                      Get Started Now
                    </h3>
                    <div className="mood-indicator">✨</div>
                  </div>
                  <UrlInput />
                  <p className="text-sm opacity-60 text-center">
                    No registration required • Free forever • Advanced analytics included
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
              {Object.entries(stats).map(([key, value], index) => (
                <div key={key} className="glass-morphism p-6 rounded-2xl text-center floating-element" style={{animationDelay: `${index * 0.5}s`}}>
                  <div className="text-2xl lg:text-3xl font-bold primary-gradient bg-clip-text text-transparent mb-2">
                    {value}
                  </div>
                  <div className="text-sm opacity-70 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Powerful Features for
              <span className="block primary-gradient bg-clip-text text-transparent">
                Modern Professionals
              </span>
            </h2>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              Everything you need to manage, track, and optimize your links in one beautiful platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="social-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Advanced Analytics</h3>
              <p className="opacity-70">
                Track clicks, analyze performance, and understand your audience with detailed insights and real-time data.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="social-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Custom Branding</h3>
              <p className="opacity-70">
                Personalize your links with custom domains, branded pages, and professional landing experiences.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="social-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Enterprise Security</h3>
              <p className="opacity-70">
                Bank-level security with SSL encryption, password protection, and expiration controls for sensitive links.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="social-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Lightning Fast</h3>
              <p className="opacity-70">
                Global CDN ensures your links redirect instantly worldwide with 99.9% uptime guarantee.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="social-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Bulk Management</h3>
              <p className="opacity-70">
                Create, edit, and organize hundreds of links efficiently with our powerful bulk management tools.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="social-card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Team Collaboration</h3>
              <p className="opacity-70">
                Share and collaborate on link campaigns with your team members and track performance together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Integration */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Perfect for
              <span className="block primary-gradient bg-clip-text text-transparent">
                Social Media
              </span>
            </h2>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              Optimize your links for every social media platform with custom previews and targeted landing pages.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="social-card p-6 text-center">
              <div className="w-12 h-12 instagram-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">IG</span>
              </div>
              <p className="font-medium">Instagram</p>
              <p className="text-sm opacity-60 mt-1">Bio links & Stories</p>
            </div>

            <div className="social-card p-6 text-center">
              <div className="w-12 h-12 twitter-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">X</span>
              </div>
              <p className="font-medium">Twitter/X</p>
              <p className="text-sm opacity-60 mt-1">Tweet optimization</p>
            </div>

            <div className="social-card p-6 text-center">
              <div className="w-12 h-12 linkedin-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">LI</span>
              </div>
              <p className="font-medium">LinkedIn</p>
              <p className="text-sm opacity-60 mt-1">Professional posts</p>
            </div>

            <div className="social-card p-6 text-center">
              <div className="w-12 h-12 facebook-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">FB</span>
              </div>
              <p className="font-medium">Facebook</p>
              <p className="text-sm opacity-60 mt-1">Page & group links</p>
            </div>
          </div>

          {/* Popular Hashtags */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold mb-6">Popular with creators using:</h3>
            <div className="flex flex-wrap justify-center max-w-4xl mx-auto">
              {['#LinkInBio', '#Creator', '#Business', '#Marketing', '#SocialMedia', '#Entrepreneur', '#Influencer', '#ContentCreator', '#DigitalMarketing', '#Growth'].map((tag) => (
                <span key={tag} className="hashtag-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Trusted by
              <span className="block primary-gradient bg-clip-text text-transparent">
                Professionals Worldwide
              </span>
            </h2>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              See what our users have to say about their experience with Linker.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-morphism p-8 rounded-3xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">SM</span>
                </div>
                <div>
                  <p className="font-semibold">Sarah Miller</p>
                  <p className="text-sm opacity-60">Digital Marketer</p>
                </div>
              </div>
              <p className="opacity-80 italic mb-4">
                "Linker has completely transformed how I manage my social media campaigns. The analytics are incredible!"
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>

            <div className="glass-morphism p-8 rounded-3xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JD</span>
                </div>
                <div>
                  <p className="font-semibold">John Davis</p>
                  <p className="text-sm opacity-60">Content Creator</p>
                </div>
              </div>
              <p className="opacity-80 italic mb-4">
                "The custom branding features are amazing. My links look professional and match my brand perfectly."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>

            <div className="glass-morphism p-8 rounded-3xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">ER</span>
                </div>
                <div>
                  <p className="font-semibold">Emily Rodriguez</p>
                  <p className="text-sm opacity-60">Small Business Owner</p>
                </div>
              </div>
              <p className="opacity-80 italic mb-4">
                "Fast, reliable, and secure. Exactly what my business needed for professional link management."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-morphism p-12 lg:p-16 rounded-3xl">
            <div className="space-y-8">
              <div className="flex items-center justify-center space-x-4">
                <div className="mood-indicator">🎯</div>
                <h2 className="text-3xl lg:text-5xl font-bold">
                  Ready to Get Started?
                </h2>
                <div className="mood-indicator">💫</div>
              </div>
              
              <p className="text-lg lg:text-xl opacity-70 max-w-2xl mx-auto">
                Join thousands of professionals who trust Linker for their link management needs. 
                Start creating better links today.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="btn-primary px-8 py-4 text-lg">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 text-lg font-medium border border-white/20 rounded-xl hover:border-white/40 transition-colors">
                  View Pricing
                </button>
              </div>

              <div className="flex items-center justify-center space-x-8 text-sm opacity-60 pt-6">
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}