import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header remains the same */}
      <header className="bg-white/80 backdrop-blur-sm fixed w-full z-50">
        <nav className="container mx-auto px-4 py-3 md:px-6 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 group">
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg transform group-hover:rotate-6 transition-transform" />
                <div className="absolute inset-0.5 bg-white rounded-lg flex items-center justify-center">
                  <img src="../../assets/logo/logo.png" alt="" className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Campus Gate
              </span>
            </div>
            <div className="flex space-x-3 md:space-x-6">
              <Link to="/signin" className="text-sm md:text-base bg-gradient-to-r from-emerald-500 to-emerald-500 text-white px-4 py-2 md:px-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                Sign In
              </Link>
              <Link to="/signup" className="text-sm md:text-base bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 md:px-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="min-h-screen bg-gray-100 ">
        {/* Updated Hero Section */}
        <section className="pt-24 md:pt-32 pb-16 md:pb-20 relative overflow-hidden px-4 md:px-6 w-sm">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative z-10 text-center lg:text-left">
                <div className="animate-fade-in-up">
                  <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 md:mb-6 bg-gradient-to-r from-gray-900 via-emerald-900 to-teal-900 bg-clip-text text-transparent">
                    Your Trusted Campus Companion
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                    Navigate clearance safely, secure verified accommodation, and boost your academic success - all in one trusted platform.
                  </p>
                  <Link to="/signup"
                    className="group inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 md:px-8 py-3 rounded-lg text-base md:text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Start Your Journey Safely
                  </Link>
                </div>
              </div>

              {/* Updated Feature Cards */}
              <div className="relative mt-8 lg:mt-0">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-full blur-3xl opacity-30 animate-pulse" />
                <div className="relative bg-white/70 backdrop-blur-lg rounded-2xl p-4 md:p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="grid grid-cols-2 gap-3 md:gap-6">
                    {[
                      { text: "Safe Payments", emoji: "🔒", color: "from-purple-500 to-indigo-500" },
                      { text: "Verified Hostels", emoji: "🏠", color: "from-pink-500 to-rose-500" },
                      { text: "Focus Tools", emoji: "🎯", color: "from-amber-500 to-orange-500" },
                      { text: "Graduate Support", emoji: "🎓", color: "from-emerald-500 to-teal-500" }
                    ].map((item, index) => (
                      <div key={index}
                        className="group bg-white rounded-lg p-4 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg">
                        <div className={`text-3xl mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                          {item.emoji}
                        </div>
                        <span className="text-sm md:text-base font-medium text-gray-700">{item.text}</span>
                      </div>
                    ))}
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
        <footer className="bg-gray-900 text-gray-400 py-10 md:py-12 px-4 md:px-6">
          {/* Previous footer code... */}
        </footer>
      </main>
    </div>
  );
}