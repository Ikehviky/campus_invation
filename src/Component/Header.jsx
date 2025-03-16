import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white/80 backdrop-blur-sm fixed w-full z-50">
            <nav className="container mx-auto px-4 py-3 md:px-6 md:py-4">
                <div className="flex items-center justify-between">
                    {/* Logo and Brand Name */}
                    <Link to="/" >
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
                    </Link>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300">
                            Home
                        </Link>
                        <Link to="/about" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300">
                            About Us
                        </Link>
                        <Link to="/testimonials" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300">
                            Testimonials
                        </Link>
                        <div className="flex space-x-3">
                            <Link to="/signin" className="text-sm md:text-base bg-gradient-to-r from-emerald-500 to-emerald-500 text-white px-4 py-2 md:px-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                                Sign In
                            </Link>
                            <Link to="/signup" className="text-sm md:text-base bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 md:px-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            className="mobile-menu-button p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6 text-gray-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu - Controlled by state */}
                <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="flex flex-col space-y-4 mt-4 pb-4">
                        <Link to="/" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300">
                            Home
                        </Link>
                        <Link to="/about" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300">
                            About Us
                        </Link>
                        <Link to="/testimonials" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300">
                            Testimonials
                        </Link>
                        <div className="flex flex-col space-y-2">
                            <Link to="/signin" className="text-center bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                                Sign In
                            </Link>
                            <Link to="/signup" className="text-center bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}