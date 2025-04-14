import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
// Using mock data instead of Supabase
import { mockSupabase } from '../utils/mockData';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [session, setSession] = useState(null);
    const [userRole, setUserRole] = useState('user'); // Default to user role
    const navigate = useNavigate();
    
    useEffect(() => {
        // Demo credentials information for testing
        console.log('Demo credentials available for testing:')
        console.log('- User: user@example.com / password123')
        console.log('- Admin: admin@example.com / admin123')
        console.log('- Manager: manager@example.com / manager123')
        
        // Get current session from mock data
        mockSupabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            if (session) {
                // Set user role directly from the mock user data
                setUserRole(session.user.role || 'user');
            }
        });

        // Listen for auth changes (simplified with mock data)
        const {
            data: { subscription },
        } = mockSupabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            if (session) {
                // Set user role directly from the mock user data
                setUserRole(session.user.role || 'user');
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    return (
        <header className="bg-notion-white border-b border-notion-light-gray-2 fixed w-full z-50">
            <nav className="container mx-auto px-4 py-3 md:px-6 md:py-4">
                <div className="flex items-center justify-between">
                    {/* Logo and Brand Name - Notion-inspired */}
                    <Link to="/" >
                        <div className="flex items-center space-x-2 group">
                            <div className="relative w-8 h-8 md:w-10 md:h-10">
                                <div className="bg-notion-black rounded-notion-md flex items-center justify-center h-full w-full">
                                    <img src="../../assets/logo/logo.png" alt="" className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                            </div>
                            <span className="text-xl md:text-2xl font-semibold text-notion-black">
                                Campus Gate
                            </span>
                        </div>
                    </Link>

                    {/* Navigation Links - Desktop - Notion-inspired */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/" className="text-notion-gray-4 hover:text-notion-black font-medium transition-colors duration-300">
                            Home
                        </Link>
                        <Link to="/about" className="text-notion-gray-4 hover:text-notion-black font-medium transition-colors duration-300">
                            About Us
                        </Link>
                        <Link to="/testimonials" className="text-notion-gray-4 hover:text-notion-black font-medium transition-colors duration-300">
                            Testimonials
                        </Link>
                        {!session ? (
                            <div className="flex space-x-3">
                                <Link to="/signin" className="notion-button notion-button-outline">
                                    Sign In
                                </Link>
                                <Link to="/signup" className="notion-button notion-button-primary">
                                    Get Started
                                </Link>
                            </div>
                        ) : (
                            <div className="flex space-x-3">
                                {userRole === 'admin' ? (
                                    <Link to="/admin" className="notion-button notion-button-primary">
                                        Admin Dashboard
                                    </Link>
                                ) : userRole === 'manager' ? (
                                    <Link to="/manager" className="notion-button notion-button-primary">
                                        Manager Dashboard
                                    </Link>
                                ) : (
                                    <Link to="/dashboard" className="notion-button notion-button-primary">
                                        Dashboard
                                    </Link>
                                )}
                                <Link to="/" className="notion-button notion-button-outline">
                                    Home
                                </Link>
                            </div>
                        )}
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
                        {!session ? (
                            <div className="flex flex-col space-y-2">
                                <Link to="/signin" className="text-center bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                                    Sign In
                                </Link>
                                <Link to="/signup" className="text-center bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                                    Get Started
                                </Link>
                            </div>
                        ) : (
                            <div className="flex flex-col space-y-2">
                                {userRole === 'admin' ? (
                                    <Link to="/admin" className="text-center bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                                        Admin Dashboard
                                    </Link>
                                ) : userRole === 'manager' ? (
                                    <Link to="/manager" className="text-center bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                                        Manager Dashboard
                                    </Link>
                                ) : (
                                    <Link to="/dashboard" className="text-center bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                                        Dashboard
                                    </Link>
                                )}
                                <Link to="/" className="text-center bg-white border border-emerald-100 text-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-50 transition-all duration-300">
                                    Home
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}