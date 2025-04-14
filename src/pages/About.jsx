import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { RiLinkedinFill, RiTwitterFill } from 'react-icons/ri';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

export default function About({ session }) {
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
            gradient: "from-gray-700 to-gray-900"
        },
        {
            name: "Amina Ibrahim",
            role: "Chief Product Officer",
            bio: "Expert in educational technology with a passion for creating tools that empower students.",
            image: "../../assets/team/team2.jpg",
            gradient: "from-gray-700 to-gray-900"
        },
        {
            name: "Daniel Okonkwo",
            role: "Head of Security",
            bio: "Cybersecurity specialist ensuring all student transactions and data remain protected.",
            image: "../../assets/team/team3.jpg",
            gradient: "from-gray-700 to-gray-900"
        },
        {
            name: "Chioma Eze",
            role: "Community Manager",
            bio: "Former student leader bridging the gap between Campus Gate and university communities.",
            image: "../../assets/team/team4.jpg",
            gradient: "from-gray-700 to-gray-900"
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
        <div className="min-h-screen bg-white">
            <Header />

            <main className="pt-24">
                {/* Hero Section */}
                <section className="relative py-16 md:py-24 border-b border-gray-200">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between md:space-x-12">
                            {/* Text Content */}
                            <div className="md:w-1/2 space-y-6">
                                {/* Pill Badge */}
                                <div className="inline-block">
                                    <div className="bg-gray-100 px-4 py-1.5 rounded-full">
                                        <span className="text-sm font-medium text-gray-700">Coming Soon</span>
                                    </div>
                                </div>

                                {/* Main Headline */}
                                <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-gray-900">
                                    Building a Safer Campus Experience
                                </h1>

                                {/* Description */}
                                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                                    We're a passionate team developing Campus Gate, a solution designed to eliminate fraud in campus clearance, verify accommodations, and provide tools Nigerian students actually need for excellence and productivity.
                                </p>

                                {/* MVP Stats */}
                                {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-6">
                                    {[
                                        { value: "3", label: "Partner Universities" },
                                        { value: "500+", label: "Beta Testers" },
                                        { value: "2 Years", label: "In Development" }
                                    ].map((stat, index) => (
                                        <div key={index} className="bg-white border border-gray-200 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
                                            <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                                            <div className="text-sm text-gray-600">{stat.label}</div>
                                        </div>
                                    ))}
                                </div> */}
                            </div>

                            {/* Image */}
                            <div className="md:w-1/2 mt-12 md:mt-0">
                                <div className="relative">
                                    {/* Image Container with Notion-inspired styling */}
                                    <div className="relative z-10 rounded-lg overflow-hidden border border-gray-200 shadow-md">
                                        <img
                                            src="../../assets/image/about.jpeg"
                                            alt="Campus Gate Team"
                                            className="w-full h-auto"
                                        />
                                        {/* MVP Overlay Badge */}
                                        <div className="absolute top-4 right-4 bg-gray-900 text-white text-sm font-medium px-4 py-1 rounded-full">
                                            MVP Coming Soon
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission and Values Tabs */}
                <section className="bg-white py-16 px-4 sm:px-6 border-b border-gray-200">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                            {/* Tab Navigation - Notion-style */}
                            <div className="md:w-1/3">
                                <div className="sticky top-28 space-y-1">
                                    {[
                                        { id: 'mission', label: 'Our Mission' },
                                        { id: 'values', label: 'Core Values' },
                                        { id: 'approach', label: 'Our Approach' }
                                    ].map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${activeTab === tab.id ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Tab Content */}
                            <div className="md:w-2/3 bg-white rounded-lg">
                                {/* Mission Tab */}
                                <div className={`${activeTab === 'mission' ? 'block' : 'hidden'} space-y-6`}>
                                    <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
                                    <p className="text-gray-600">
                                        Campus Gate exists to create a safer, more efficient campus experience for Nigerian students. We're committed to eliminating fraud in clearance processes, providing verified accommodation options, and offering productivity tools that help students excel academically.
                                    </p>
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-600">
                                        <p className="italic">"We envision a future where every Nigerian student can navigate their academic journey without falling victim to scams or inefficient processes."</p>
                                    </div>
                                </div>

                                {/* Values Tab */}
                                <div className={`${activeTab === 'values' ? 'block' : 'hidden'} space-y-6`}>
                                    <h2 className="text-2xl font-semibold text-gray-900">Core Values</h2>
                                    <div className="space-y-4">
                                        {[
                                            { title: "Integrity", description: "We operate with complete transparency and honesty in all our dealings." },
                                            { title: "Innovation", description: "We continuously seek better ways to solve campus challenges." },
                                            { title: "Inclusivity", description: "Our platform is designed to be accessible to all students regardless of background." },
                                            { title: "Impact", description: "We measure our success by the positive difference we make in students' lives." }
                                        ].map((value, index) => (
                                            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                                                <h3 className="font-medium text-gray-900">{value.title}</h3>
                                                <p className="text-gray-600 text-sm mt-1">{value.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Approach Tab */}
                                <div className={`${activeTab === 'approach' ? 'block' : 'hidden'} space-y-6`}>
                                    <h2 className="text-2xl font-semibold text-gray-900">Our Approach</h2>
                                    <p className="text-gray-600">
                                        We take a student-centered approach to problem-solving, focusing on creating intuitive, reliable solutions that address real needs. Our development process involves extensive research, student feedback, and continuous iteration.
                                    </p>
                                    <div className="space-y-4">
                                        {[
                                            { title: "Research & Validation", description: "We spend time understanding the real problems students face." },
                                            { title: "Collaborative Design", description: "We work directly with students to design intuitive solutions." },
                                            { title: "Rigorous Testing", description: "Every feature undergoes extensive testing before release." },
                                            { title: "Continuous Improvement", description: "We regularly update our platform based on user feedback." }
                                        ].map((step, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <div className="bg-gray-100 text-gray-900 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                                                    {index + 1}
                                                </div>
                                                <div>
                                                    <h3 className="font-medium text-gray-900">{step.title}</h3>
                                                    <p className="text-gray-600 text-sm">{step.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                {/* <section id="team" className="py-16 px-4 sm:px-6 bg-gray-50 border-b border-gray-200">
                    <div className="max-w-5xl mx-auto"> */}
                        {/* <div className="text-center mb-12">
                            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Meet Our Team</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                We're a diverse group of professionals passionate about improving the campus experience for Nigerian students.
                            </p>
                        </div> */}

                        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                                    <div className={`h-3 bg-gradient-to-r ${member.gradient}`}></div>
                                    <div className="p-6">
                                        <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-4">
                                            Placeholder for team member image
                                        </div>
                                        <h3 className="text-lg font-medium text-gray-900 text-center">{member.name}</h3>
                                        <p className="text-gray-500 text-sm text-center mb-3">{member.role}</p>
                                        <p className="text-gray-600 text-sm text-center">{member.bio}</p>
                                        <div className="flex justify-center space-x-3 mt-4">
                                            <a href="#" className="text-gray-400 hover:text-gray-700">
                                                <RiTwitterFill className="w-5 h-5" />
                                            </a>
                                            <a href="#" className="text-gray-400 hover:text-gray-700">
                                                <RiLinkedinFill className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div> */}
                    {/* </div>
                </section> */}

                {/* Timeline Section */}
                {/* <section className="py-16 px-4 sm:px-6 bg-white">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Journey</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                From idea to implementation, see how Campus Gate has evolved over time.
                            </p>
                        </div>

                        <div className="relative"> */}
                            {/* Timeline Line */}
                            {/* <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200"></div> */}

                            {/* Timeline Items */}
                            {/* <div className="space-y-12">
                                {timeline.map((item, index) => (
                                    <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}> */}
                                        {/* Timeline Content */}
                                        {/* <div className="w-5/12"></div> */}
                                        
                                        {/* Timeline Dot */}
                                        {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gray-900 z-10 border-4 border-white"></div> */}
                                        
                                        {/* Timeline Card */}
                                        {/* <div className="w-5/12 bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
                                            <div className="text-sm font-medium text-gray-500 mb-1">{item.year}</div>
                                            <h3 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h3>
                                            <p className="text-gray-600 text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div> */}
                {/* </section> */}
            </main>

            <Footer />
        </div>
    );
}