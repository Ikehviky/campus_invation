import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase, isSupabaseConfigured } from '../utils/supabase';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const carouselImages = [
    {
      image: "/assets/image/campus00.jpg",
      alt: "Campus Gate User",
      description: "Access resources and connect with fellow students"
    },
    {
      image: "/assets/image/campus01.jpg",
      alt: "Campus facilities",
      description: "Discover campus amenities and services"
    },
    {
      image: "/assets/image/campus02.jpg",
      alt: "Student collaboration",
      description: "Collaborate on projects and share knowledge"
    }
  ];



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!isSupabaseConfigured()) {
      setError('Please connect to Supabase first using the "Connect to Supabase" button');
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      console.log('Login successful:', data);
      
      // Check if user has admin role or redirect to admin section
      const { data: userData } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', data.user.id)
        .single();
      
      if (userData && userData.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError(error.message || 'An error occurred during sign in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    
    if (!isSupabaseConfigured()) {
      setError('Please connect to Supabase first using the "Connect to Supabase" button');
      setLoading(false);
      return;
    }
    
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin + '/auth/callback'
        }
      });
      
      if (error) throw error;
      console.log('Google sign-in initiated:', data);
      
      // In a real implementation, we would handle the OAuth callback
      // For our mock implementation, we'll simulate a successful login
      // In production, Supabase handles this automatically through the redirectTo URL
      
      // For demo purposes, we'll check for the session after a short delay
      // This simulates the user being redirected back after authentication
      setTimeout(async () => {
        try {
          // Get the current session
          const { data: { session } } = await supabase.auth.getSession();
          
          if (session && session.user) {
            // Check if user has admin role
            try {
              const { data: userData } = await supabase
                .from('profiles')
                .select('role')
                .eq('id', session.user.id)
                .single();
              
              if (userData && userData.role === 'admin') {
                navigate('/admin');
              } else {
                navigate('/dashboard');
              }
            } catch (profileError) {
              // If there's no profile yet or another error, just go to dashboard
              navigate('/dashboard');
            }
          }
        } catch (sessionError) {
          console.error('Session retrieval error:', sessionError);
        }
      }, 1000); // Simulate redirect delay
    } catch (error) {
      console.error('Google sign-in error:', error);
      setError(error.message || 'An error occurred during Google sign in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-1">
        {/* Left Side - Carousel */}
        <div className="hidden md:flex md:w-1/2 bg-gray-50 relative">
          <div className="relative w-full h-full overflow-hidden">
            {carouselImages.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/70 to-transparent p-8">
                  <h3 className="text-white text-xl font-medium">{item.alt}</h3>
                  <p className="text-white/80 mt-2">{item.description}</p>
                </div>
              </div>
            ))}

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Sign In Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            {/* Logo Header - Added new section */}
            <header className="text-center mb-8">
              <Link to="/" className="items-center">
                <div className="flex flex-col items-center">
                  <span className="relative w-20 h-20 md:w-25 md:h-25 transition-all duration-200 hover:scale-105 flex items-center justify-center">
                    <img src="/assets/logo/logo.png" alt="Campus Gate Logo" className="w-15 h-15 md:w-12 md:h-19" />
                  </span>
                  <span className="text-xl md:text-2xl font-semibold text-gray-900">
                    Campus Gate
                  </span>
                  <span className="text-xs text-gray-500 -mt-1">Your Campus Companion</span>
                </div>
              </Link>
            </header>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-900">
                Welcome Back
              </h2>
              <p className="mt-2 text-gray-500">Sign in to continue your journey</p>
            </div>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-200 px-4 py-2.5 shadow-sm focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-200 px-4 py-2.5 shadow-sm focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-colors duration-200"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-200 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-gray-600 hover:text-gray-800 transition-colors duration-200">
                    Forgot password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-900 text-white py-2.5 px-4 rounded-md hover:bg-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <button
                onClick={handleGoogleSignIn}
                className="mt-4 w-full flex items-center justify-center px-4 py-2.5 border border-gray-200 rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:shadow-sm transition-all duration-200 font-medium"
              >
                <img
                  className="h-5 w-5 mr-2"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google logo"
                />
                Sign in with Google
              </button>
            </div>

            <p className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="font-medium text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}