import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header remains the same */}
      {/* Header with navigation menu that matches footer quick links */}
      <header className="bg-white/80 backdrop-blur-sm fixed w-full z-50">
        <Header />
      </header>

      <main className="min-h-screen bg-gray-100">
        {/* Revamped Hero Section with Enhanced Visual Appeal */}
        <section className="relative overflow-hidden min-h-[90vh] flex items-center">
          {/* Hero Background Image with Improved Styling */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/assets/image/hero.jpeg"
              alt="Campus environment"
              className="w-full h-full object-cover opacity-40 md:opacity-50"
            />
           
          </div>

          <div className="container mx-auto relative z-10 px-4 md:px-6 py-16 md:py-20">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="relative z-10 text-center lg:text-left">
                <div className="space-y-6 md:space-y-8 animate-fade-in-up">
                  <div className="inline-block px-3 py-1 bg-emerald-50 bg-opacity-90 rounded-full mb-2 backdrop-blur-sm">
                    <span className="text-xs md:text-sm font-semibold text-emerald-700 flex items-center">
                      <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                      Trusted by thousands of students
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-700 bg-clip-text text-transparent">
                    Your Ultimate <br className="hidden md:block" />
                    <span className="relative inline-block">
                      <span className="relative inline-block px-2 py-1 transform -skew-x-3 overflow-hidden">
                        
                        <span className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-700 bg-clip-text text-transparent">Campus Companion</span>
                      </span>
                      <div className="absolute -right-4 -top-4 w-8 h-8 bg-emerald-400/30 rounded-full filter blur-sm animate-ping opacity-75"></div>
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
                    Navigate clearance safely, secure verified accommodation, and boost your academic success - all in one trusted platform designed for your campus journey.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
                    <Link to="/signup"
                      className="group w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl text-base md:text-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 hover:scale-105">
                      Start Your Journey
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                    <Link to="/about"
                      className="group w-full sm:w-auto inline-flex items-center justify-center bg-white border-2 border-emerald-100 text-emerald-700 px-8 py-3.5 rounded-xl text-base md:text-lg font-medium hover:bg-emerald-50 transition-all duration-300">
                      Learn More
                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Enhanced Feature Cards with Better Visual Impact */}
              <div className="relative mt-12 lg:mt-0">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-full blur-3xl opacity-30 animate-pulse" />
                <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl transform hover:scale-102 transition-all duration-300 border border-emerald-50/50">
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-emerald-400/20 rounded-full filter blur-xl"></div>
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    {[
                      { text: "Safe Payments", emoji: "🔒", color: "from-purple-600 to-indigo-600", description: "Secure transactions" },
                      { text: "Verified Hostels", emoji: "🏠", color: "from-pink-600 to-rose-600", description: "Trusted accommodations" },
                      { text: "Focus Tools", emoji: "🎯", color: "from-amber-600 to-orange-600", description: "Productivity boosters" },
                      { text: "Graduate Support", emoji: "🎓", color: "from-emerald-600 to-teal-600", description: "Career assistance" }
                    ].map((item, index) => (
                      <div key={index}
                        className="group bg-white rounded-xl p-5 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-emerald-100">
                        <div className={`flex items-center justify-center w-12 h-12 mb-3 rounded-lg bg-gradient-to-r ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-2xl text-white">{item.emoji}</span>
                        </div>
                        <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-1">{item.text}</h3>
                        <p className="text-xs text-gray-500">{item.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      </div>
                      <span className="text-xs font-medium text-gray-500">Trusted by 10,000+ students</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Updated Pain Points & Solutions */}
        <section className="py-12 md:py-16 bg-white px-4 md:px-6">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">We've Got Your Back</h2>
            <div className="grid gap-6 md:grid-cols-3 md:gap-8">
              {[
                {
                  title: "Clearance Made Simple",
                  description: "Step-by-step guidance through your clearance process, with fraud protection and verified payment channels. Perfect for both current students and graduates.",
                  emoji: "✨",
                  gradient: "from-violet-500 to-purple-500"
                },
                {
                  title: "Safe Accommodation",
                  description: "Access verified hostels, connect with trusted roommates, and buy/sell fairly used items through our secure marketplace. No more scams or worries.",
                  emoji: "🏡",
                  gradient: "from-rose-500 to-pink-500"
                },
                {
                  title: "Focus & Productivity",
                  description: "Stay on track with our productivity tools, study reminders, and progress tracking. Transform your academic journey from day one.",
                  emoji: "🎯",
                  gradient: "from-amber-500 to-orange-500"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                  <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Updated Features Section */}
        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Your Complete Campus Solution</h2>
              <p className="text-lg md:text-xl text-gray-600">Everything you need for a safe and successful academic journey</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-6">
                {[
                  {
                    title: "Secure Payment Gateway",
                    description: "Make all your campus payments safely through our verified channels - from clearance to accommodation.",
                    emoji: "🔒",
                    gradient: "from-blue-500 to-cyan-500"
                  },
                  {
                    title: "Verified Marketplace",
                    description: "Find trusted roommates, buy/sell items, and book accommodation with confidence in our secure ecosystem.",
                    emoji: "🤝",
                    gradient: "from-emerald-500 to-teal-500"
                  },
                  {
                    title: "Smart Study Tools",
                    description: "Stay focused with productivity tracking, study reminders, and progress monitoring features.",
                    emoji: "📚",
                    gradient: "from-violet-500 to-purple-500"
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className={`bg-gradient-to-br ${feature.gradient} p-3 rounded-lg shrink-0 transform group-hover:rotate-6 transition-transform duration-300`}>
                      <span className="text-2xl">{feature.emoji}</span>
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative mt-8 md:mt-0">
                <div className="bg-gradient-to-r from-emerald-100 to-teal-50 rounded-2xl p-4 md:p-8 transform hover:scale-105 transition-all duration-300">
                  <img
                    src="../../assets/image/img.jpeg"
                    alt="Campus Gate features"
                    className="rounded-lg shadow-lg w-full h-64 md:h-80 object-cover transform hover:rotate-2 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Updated CTA Section */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 py-12 md:py-16 px-4 md:px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl" />
          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Ready for a Safer, Smarter Campus Life?</h2>
            <p className="text-lg md:text-xl text-emerald-50 mb-6 md:mb-8">Join thousands of students enjoying a secure and productive academic journey</p>
            <Link
              to="/signup"
              className="inline-flex items-center bg-white text-emerald-600 px-6 md:px-8 py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-gray-50 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              Start Now
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </section>

        {/* Footer remains the same */}
        <Footer />
      
      </main>
    </div>
  );
}