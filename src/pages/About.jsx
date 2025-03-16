import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { RiLinkedinFill, RiTwitterFill } from 'react-icons/ri';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

export default function About() {
    const [activeTab, setActiveTab] = useState('mission');
    const [animateSection, setAnimateSection] = useState(null);

    // Animation logic for scroll-triggered animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setAnimateSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const sections = document.querySelectorAll('.animate-section');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    // Team members data
    const teamMembers = [
        {
            name: "Oluwaseun Ajayi",
            role: "Founder & CEO",
            bio: "Former student who experienced firsthand the challenges of campus life and clearance processes.",
            image: "../../assets/team/team1.jpg",
            gradient: "from-emerald-500 to-teal-500"
        },
        {
            name: "Amina Ibrahim",
            role: "Chief Product Officer",
            bio: "Expert in educational technology with a passion for creating tools that empower students.",
            image: "../../assets/team/team2.jpg",
            gradient: "from-purple-500 to-indigo-500"
        },
        {
            name: "Daniel Okonkwo",
            role: "Head of Security",
            bio: "Cybersecurity specialist ensuring all student transactions and data remain protected.",
            image: "../../assets/team/team3.jpg",
            gradient: "from-amber-500 to-orange-500"
        },
        {
            name: "Chioma Eze",
            role: "Community Manager",
            bio: "Former student leader bridging the gap between Campus Gate and university communities.",
            image: "../../assets/team/team4.jpg",
            gradient: "from-rose-500 to-pink-500"
        }
    ];

    // Timeline data
    const timeline = [
        {
            year: "2021",
            title: "The Idea",
            description: "Frustrated by campus clearance scams, our founder envisioned a safer solution for Nigerian students."
        },
        {
            year: "2022",
            title: "First Beta",
            description: "Launched our first beta version with clearance tracking at three partner universities."
        },
        {
            year: "2023",
            title: "Expansion",
            description: "Added accommodation verification and marketplace features, growing to serve 12 universities."
        },
        {
            year: "2024",
            title: "Study Tools",
            description: "Introduced productivity features and expanded our team to better serve the growing user base."
        },
        {
            year: "2025",
            title: "Going National",
            description: "Now supporting students across Nigeria with our comprehensive campus companion platform."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
            {/* Header would be identical to the one from Home page */}
            <header className="bg-white/80 backdrop-blur-sm fixed w-full z-50">
                {/* Header content would be the same as in the Home component */}
                <Header />
            </header>

            <main className="pt-24 ">
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center overflow-hidden">
                    {/* Dynamic Background */}
                    <div className="absolute inset-0 -z-10">
                        {/* Gradient Base */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50 to-teal-50"></div>

                        {/* Abstract Shapes */}
                        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-emerald-300 opacity-20 blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-teal-300 opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-blue-300 opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>

                        {/* Decorative Elements */}
                        <div className="absolute top-10 left-10 opacity-10">
                            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30,50 Q100,10 170,50 T170,150 Q100,190 30,150 T30,50" stroke="#059669" strokeWidth="2" fill="none" />
                            </svg>
                        </div>
                        <div className="absolute bottom-10 right-10 opacity-10">
                            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="100" cy="100" r="80" stroke="#0d9488" strokeWidth="2" fill="none" strokeDasharray="10 5" />
                            </svg>
                        </div>
                    </div>

                    <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:space-x-8">
                            {/* Text Content */}
                            <div className="md:w-1/2 space-y-8">
                                {/* Pill Badge */}
                                <div className="inline-block animate-fade-in">
                                    <div className="p-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full">
                                        <div className="bg-white px-5 py-1.5 rounded-full">
                                            <span className="text-sm font-medium text-emerald-700">Coming Soon</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Main Headline */}
                                <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.3s' }}>
                                    <span className="bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-700 bg-clip-text text-transparent">
                                        Building a Safer Campus Experience
                                    </span>
                                </h1>

                                {/* Description */}
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
                                    We're a passionate team developing Campus Gate, a solution designed to eliminate fraud in campus clearance, verify accommodations, and provide tools Nigerian students actually need for excellence and productivity.
                                </p>

                                {/* Call to Action Buttons */}
                                    {/* <div className="flex flex-wrap gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
                                        <a href="#mission" className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform transition hover:-translate-y-1">
                                            Our Vision
                                        </a>
                                        <a href="#team" className="px-6 py-3 bg-white text-emerald-700 border border-emerald-200 font-medium rounded-lg shadow-sm hover:shadow hover:bg-emerald-50 transform transition hover:-translate-y-1">
                                            Join Early Access
                                        </a>
                                    </div> */}

                                {/* MVP Stats */}
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-6 animate-fade-in" style={{ animationDelay: '1.2s' }}>
                                    {[
                                        // { value: "3", label: "Partner Universities" },
                                        // { value: "500+", label: "Beta Testers" },
                                        // { value: "2 Years", label: "In Development" }
                                    ].map((stat, index) => (
                                        <div key={index} className="text-center p-4 rounded-lg bg-white bg-opacity-70 backdrop-blur-sm shadow-sm">
                                            <div className="text-2xl md:text-3xl font-bold text-emerald-700">{stat.value}</div>
                                            <div className="text-sm text-gray-600">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Image */}
                            <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                                <div className="relative">
                                    {/* Image Container with Decorative Elements */}
                                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border-8 border-white  transition-transform duration-500">
                                        <img
                                            src="../../assets/image/about.jpeg"
                                            alt="Campus Gate Team"
                                            className="w-full h-auto"
                                        />
                                        {/* MVP Overlay Badge */}
                                        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold px-4 py-1 rounded-full transform rotate-12 shadow-lg">
                                            MVP Coming Soon
                                        </div>
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full opacity-20 blur-xl"></div>
                                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-teal-300 to-blue-400 rounded-full opacity-20 blur-xl"></div>

                                    {/* Floating Icons */}
                                    <div className="absolute top-10 -right-10 p-4 bg-white rounded-full shadow-lg animate-float">
                                        <svg className="w-8 h-8 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div className="absolute -bottom-4 left-10 p-3 bg-white rounded-full shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                                        <svg className="w-6 h-6 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Scroll Down Indicator */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                            <span className="text-sm text-emerald-700 mb-2">Discover our story</span>
                            <svg className="w-6 h-6 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </section>

                {/* Mission and Values Tabs */}
                <section className="bg-white py-16 px-4 md:px-6">
                    <div className="container mx-auto max-w-5xl">
                        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                            {/* Tab Navigation */}
                            <div className="md:w-1/3">
                                <div className="sticky top-28 space-y-2">
                                    {[
                                        { id: 'mission', label: 'Our Mission' },
                                        { id: 'values', label: 'Core Values' },
                                        { id: 'approach', label: 'Our Approach' }
                                    ].map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 ${activeTab === tab.id
                                                ? 'bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 text-emerald-700 font-medium'
                                                : 'hover:bg-gray-50'
                                                }`}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Tab Content */}
                            <div className="md:w-2/3">
                                <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-6 md:p-8 shadow-sm">
                                    {activeTab === 'mission' && (
                                        <div className="animate-fade-in">
                                            <h2 className="text-2xl font-bold mb-6 text-emerald-800">Our Mission</h2>
                                            <p className="text-gray-700 mb-4">
                                                Campus Gate exists to safeguard students against fraud and inefficiencies in the campus ecosystem. We're building the comprehensive platform we wish existed when we were students.
                                            </p>
                                            <p className="text-gray-700 mb-6">
                                                By creating secure payment channels, verifying accommodations, and providing productivity tools, we're empowering Nigerian students to focus on what matters most – their education and growth.
                                            </p>
                                            <div className="bg-white p-6 rounded-xl border border-emerald-100 flex items-start space-x-4">
                                                <div className="text-3xl text-emerald-500">💡</div>
                                                <div>
                                                    <h3 className="font-semibold mb-2">Our Vision</h3>
                                                    <p className="text-gray-600">A future where every Nigerian student has access to trusted tools that make campus life safer, simpler, and more productive.</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'values' && (
                                        <div className="animate-fade-in">
                                            <h2 className="text-2xl font-bold mb-6 text-emerald-800">Core Values</h2>
                                            <div className="grid gap-5">
                                                {[
                                                    { title: "Trust & Security", description: "We prioritize student safety in every feature we build.", icon: "🔒" },
                                                    { title: "Student-Centered", description: "Everything we create starts with real student problems.", icon: "👨‍🎓" },
                                                    { title: "Continuous Improvement", description: "We're always evolving our platform based on feedback.", icon: "📈" },
                                                    { title: "Accessibility", description: "Campus solutions should be available to all students, regardless of background.", icon: "🌍" }
                                                ].map((value, index) => (
                                                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-emerald-50 transition-colors duration-300">
                                                        <div className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-lg p-3 text-xl">{value.icon}</div>
                                                        <div>
                                                            <h3 className="font-semibold text-lg mb-1">{value.title}</h3>
                                                            <p className="text-gray-600">{value.description}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'approach' && (
                                        <div className="animate-fade-in">
                                            <h2 className="text-2xl font-bold mb-6 text-emerald-800">Our Approach</h2>
                                            <p className="text-gray-700 mb-6">
                                                We believe in creating solutions through deep understanding of student challenges. Our development process includes:
                                            </p>
                                            <div className="space-y-6">
                                                {[
                                                    {
                                                        title: "Listen & Understand",
                                                        description: "We conduct extensive research with students and university administrators to identify pain points.",
                                                        icon: "👂"
                                                    },
                                                    {
                                                        title: "Design For Trust",
                                                        description: "Every feature is built with security and transparency at its core.",
                                                        icon: "🛡️"
                                                    },
                                                    {
                                                        title: "Test With Students",
                                                        description: "Real students test our features before we roll them out to ensure they solve real problems.",
                                                        icon: "🧪"
                                                    },
                                                    {
                                                        title: "Iterate & Improve",
                                                        description: "We continuously gather feedback and improve our platform based on actual usage.",
                                                        icon: "🔄"
                                                    }
                                                ].map((step, index) => (
                                                    <div key={index} className="flex">
                                                        <div className="mr-4 mt-1">
                                                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                                                                {step.icon}
                                                            </div>
                                                            {index < 3 && <div className="w-px h-16 bg-emerald-200 mx-auto mt-2"></div>}
                                                        </div>
                                                        <div>
                                                            <h3 className="font-semibold text-lg">{step.title}</h3>
                                                            <p className="text-gray-600">{step.description}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Our Journey Timeline - Revamped */}
                {/* <section id="journey" className="py-20 px-4 md:px-6 bg-gradient-to-b from-white to-emerald-50 animate-section">
                    <div className="container mx-auto max-w-5xl"> */}
                {/* Section Header with Animation */}
                {/* <div className="text-center mb-16">
                            <div className="inline-block mb-4">
                                <div className="p-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg">
                                    <div className="bg-white px-4 py-1 rounded-md">
                                        <span className="text-sm font-medium text-emerald-700">Our Story</span>
                                    </div>
                                </div>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-700 bg-clip-text text-transparent">
                                The Campus Gate Journey
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                From a simple idea born out of frustration to a nationwide platform serving students across Nigeria.
                            </p>
                        </div> */}

                {/* Timeline Cards - Alternating Layout with Hover Effects */}
                {/* <div className="relative"> */}
                {/* Central Timeline Line */}
                {/* <div className="hidden md:block border-dashed border-l-2 border-emerald-400 absolute h-full left-1/2 -translate-x-1/2"></div>

                            {timeline.map((item, index) => (
                                <div
                                    key={index}
                                    className={`mb-12 md:mb-24 ${animateSection === 'journey' ? 'opacity-100' : 'opacity-0'}`}
                                    style={{ transitionDelay: `${index * 200}ms`, transition: 'all 0.6s ease-out' }}
                                >
                                    <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}> */}
                {/* Year Bubble - Mobile: Top, Desktop: In Timeline */}
                {/* <div className="flex md:hidden justify-center mb-4">
                                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg flex items-center justify-center text-white font-bold text-xl">
                                                {item.year}
                                            </div>
                                        </div> */}

                {/* Timeline Content Card */}
                {/* <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-emerald-100">
                                                <h3 className="font-bold text-xl mb-3 text-emerald-800">{item.title}</h3>
                                                <p className="text-gray-600">{item.description}</p>
                                            </div>
                                        </div> */}

                {/* Timeline Center Point - Desktop Only */}
                {/* <div className="hidden md:flex w-2/12 justify-center relative">
                                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg flex items-center justify-center text-white font-bold text-xl z-10">
                                                {item.year}
                                            </div> */}
                {/* Connector Lines */}
                {/* <div className={`absolute top-1/2 w-1/2 border-t-2 border-dashed border-emerald-300 ${index % 2 === 0 ? 'right-0' : 'left-0'}`}></div>
                                        </div> */}

                {/* Empty Space for Alignment - Desktop Only */}
                {/* <div className="hidden md:block md:w-5/12"></div>
                                    </div>
                                </div>
                            ))} */}

                {/* Future Point */}
                {/* <div className="flex justify-center">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 shadow-lg flex items-center justify-center text-white font-bold">
                                    <div className="text-center">
                                        <div className="text-lg">Future</div>
                                        <div className="text-xs font-normal">Continues</div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                {/* Call to Action */}
                {/* <div className="mt-16 text-center">
                            <p className="text-lg text-gray-600 mb-6">Join us as we continue building the future of campus life in Nigeria</p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                            >
                                Be Part of Our Story
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section> */}
                {/* Footer  */}
                <Footer />



            </main>


        </div>
    );
}