import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// Using mock data instead of Supabase
import { mockSupabase } from '../utils/mockData';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

export default function Home({ session: propSession }) {
  const [session, setSession] = useState(propSession);
  
  useEffect(() => {
    // If session is passed as prop, use it
    if (propSession) {
      setSession(propSession);
      return;
    }
    
    // Otherwise, get current session from mock data
    mockSupabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for auth changes using mock data
    const {
      data: { subscription },
    } = mockSupabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, [propSession]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with minimal navigation */}
      <header className="bg-white border-b border-gray-200 fixed w-full z-50">
        <Header />
      </header>

      <main className="pt-16 min-h-screen">
        {/* Hero Section - Notion-inspired clean layout */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="space-y-8">
            {/* Simple badge */}
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-1.5"></span>
              Trusted by thousands of students
            </div>
            
            {/* Clean typography */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Your Ultimate Campus Companion
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl">
              A solution designed to eliminate fraud in campus clearance, verify accommodations, and provide tools Nigerian students actually need for excellence and productivity.
            </p>
            
            {/* Clean button group */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              {!session ? (
                <Link to="/signup"
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors">
                  Start Your Journey
                  <span className="ml-2">→</span>
                </Link>
              ) : (
                <Link to="/signup"
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors">
                  Get Started
                  <span className="ml-2">→</span>
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Feature Cards - Block-based layout */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left column - Feature blocks */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">🔒</span>
                    <h3 className="text-lg font-medium text-gray-900">Safe Payments</h3>
                  </div>
                  <p className="text-gray-600">Secure transactions for all your campus payments, from clearance to accommodation fees.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">🏠</span>
                    <h3 className="text-lg font-medium text-gray-900">Verified Hostels</h3>
                  </div>
                  <p className="text-gray-600">Access to trusted accommodations that have been verified for safety and quality.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">🎯</span>
                    <h3 className="text-lg font-medium text-gray-900">Focus Tools</h3>
                  </div>
                  <p className="text-gray-600">Productivity boosters designed specifically for students to excel academically.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">🎓</span>
                    <h3 className="text-lg font-medium text-gray-900">Graduate Support</h3>
                  </div>
                  <p className="text-gray-600">Career assistance and resources to help you transition from student to professional.</p>
                </div>
              </div>
              
              {/* Right column - Info block */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">We've Got Your Back</h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-gray-200 pl-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Clearance Made Simple</h3>
                    <p className="text-gray-600">Step-by-step guidance through your clearance process, with fraud protection and verified payment channels.</p>
                  </div>
                  
                  <div className="border-l-2 border-gray-200 pl-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Safe Accommodation</h3>
                    <p className="text-gray-600">Access verified hostels, connect with trusted roommates, and buy/sell fairly used items through our secure marketplace.</p>
                  </div>
                  
                  <div className="border-l-2 border-gray-200 pl-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Focus & Productivity</h3>
                    <p className="text-gray-600">Stay on track with our productivity tools, study reminders, and progress tracking.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section - Toggle-like blocks */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Your Complete Campus Solution</h2>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                <div className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-md mr-4">
                    <span className="text-xl">🔒</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Secure Payment Gateway</h3>
                    <p className="text-gray-600">Make all your campus payments safely through our verified channels - from clearance to accommodation.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                <div className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-md mr-4">
                    <span className="text-xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Verified Marketplace</h3>
                    <p className="text-gray-600">Find trusted roommates, buy/sell items, and book accommodation with confidence in our secure ecosystem.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                <div className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-md mr-4">
                    <span className="text-xl">📚</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Smart Study Tools</h3>
                    <p className="text-gray-600">Stay focused with productivity tracking, study reminders, and progress monitoring features.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Clean and minimal */}
        <section className="bg-gray-100 py-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for a Safer, Smarter Campus Life?</h2>
            <p className="text-lg text-gray-600 mb-8">Join thousands of students enjoying a secure and productive academic journey</p>
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors shadow-sm hover:shadow-md"
            >
              Start Now
              <span className="ml-2">→</span>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}