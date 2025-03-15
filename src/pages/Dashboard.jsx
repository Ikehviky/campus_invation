import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../utils/supabase';

export default function Dashboard() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState('');
  const [showClearanceModal, setShowClearanceModal] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState('');
  const [currentStep, setCurrentStep] = useState('select-school'); // select-school, view-guide, help-options
  const printRef = useRef();
  
  // List of Nigerian universities for the dropdown
  const nigerianSchools = [
    "University of Lagos",
    "University of Ibadan",
    "Federal University of Technology, Akure",
    "Ahmadu Bello University",
    "University of Nigeria, Nsukka",
    "University of Benin",
    "Obafemi Awolowo University",
    "University of Ilorin",
    "Federal University of Technology, Minna",
    "University of Port Harcourt",
    "Covenant University",
    "Babcock University",
    "Landmark University",
    "Lagos State University",
    "Nnamdi Azikiwe University"
  ];

  // Demo clearance guides for each school
  // In a real application, these would be fetched from a database
  const clearanceGuides = {
    "University of Lagos": [
      { step: 1, title: "Online Registration", description: "Complete student profile on university portal" },
      { step: 2, title: "Faculty Clearance", description: "Visit faculty office with student ID and registration slip" },
      { step: 3, title: "Library Clearance", description: "Ensure all borrowed books are returned" },
      { step: 4, title: "Fees Verification", description: "Visit bursary for confirmation of payment" },
      { step: 5, title: "ID Card Collection", description: "Collect student ID from student affairs" }
    ],
    "University of Ibadan": [
      { step: 1, title: "Portal Registration", description: "Update profile on UI student portal" },
      { step: 2, title: "Department Clearance", description: "Get clearance form signed by department head" },
      { step: 3, title: "Health Center Registration", description: "Complete medical form at university clinic" },
      { step: 4, title: "Faculty Verification", description: "Submit documents at faculty office" },
      { step: 5, title: "Hostel Allocation", description: "Apply for accommodation at student affairs" }
    ],
    "Federal University of Technology, Akure": [
      { step: 1, title: "Biometric Capture", description: "Complete biometric registration at ICT center" },
      { step: 2, title: "School Fees Confirmation", description: "Print payment receipt from portal" },
      { step: 3, title: "Course Registration", description: "Register courses on the student portal" },
      { step: 4, title: "Departmental Clearance", description: "Submit signed course form to department" },
      { step: 5, title: "Student ID Processing", description: "Take photo at the student affairs office" }
    ]
  };

  // Service pricing
  const services = [
    { 
      id: 'guided-assistance', 
      title: 'Guided Assistance', 
      description: 'Get step-by-step guidance from our agents', 
      price: 15000, 
      features: [
        'Live chat support',
        'Document verification assistance',
        'Process timeline tracking',
        'Email & SMS reminders'
      ] 
    },
    { 
      id: 'full-service', 
      title: 'Full Clearance Service', 
      description: 'We handle the entire process for you', 
      price: 50000, 
      features: [
        'End-to-end clearance management',
        'Document preparation & submission',
        'In-person university visits',
        'Real-time status updates',
        'Expedited processing'
      ] 
    }
  ];

  // Generate demo clearance guides for schools that don't have specific ones
  const getDefaultClearanceGuide = (schoolName) => {
    return [
      { step: 1, title: "Online Registration", description: `Register on ${schoolName} student portal` },
      { step: 2, title: "Department Verification", description: "Visit your department with required documents" },
      { step: 3, title: "Fee Payment Confirmation", description: "Submit payment receipts to accounts office" },
      { step: 4, title: "Library Registration", description: "Register at the main library" },
      { step: 5, title: "Student ID Processing", description: "Complete ID card application process" }
    ];
  };

  // Get clearance guide for selected school or use default
  const getClearanceGuide = (school) => {
    return clearanceGuides[school] || getDefaultClearanceGuide(school);
  };

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserEmail(user.email);
        // Extract name from email (before @) and remove any numbers
        const nameFromEmail = user.email.split('@')[0].replace(/[0-9]/g, '');
        // Capitalize first letter
        const formattedName = nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);
        setUserName(formattedName);
      }
    };
    getUser();
  }, []);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleStartClearance = () => {
    setShowClearanceModal(true);
    setCurrentStep('select-school');
  };

  const handleCloseModal = () => {
    setShowClearanceModal(false);
    setSelectedSchool('');
    setCurrentStep('select-school');
  };

  const handleSchoolChange = (e) => {
    setSelectedSchool(e.target.value);
  };

  const handleSchoolSubmit = (e) => {
    e.preventDefault();
    setCurrentStep('view-guide');
  };

  const handlePrint = () => {
    const content = printRef.current;
    const printWindow = window.open('', '_blank');
    
    printWindow.document.write(`
      <html>
        <head>
          <title>Clearance Guide - ${selectedSchool}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h1 { color: #065f46; }
            .step { margin-bottom: 15px; padding: 10px; border: 1px solid #ddd; border-radius: 5px; }
            .step-header { display: flex; align-items: center; }
            .step-number { width: 25px; height: 25px; background: linear-gradient(to right, #10b981, #14b8a6); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; }
            .step-title { font-weight: bold; }
            .step-description { margin-top: 5px; margin-left: 35px; color: #4b5563; }
            .footer { margin-top: 30px; text-align: center; font-size: 12px; color: #9ca3af; }
          </style>
        </head>
        <body>
          <h1>Clearance Guide for ${selectedSchool}</h1>
          <div>
            ${getClearanceGuide(selectedSchool).map(item => `
              <div class="step">
                <div class="step-header">
                  <div class="step-number">${item.step}</div>
                  <div class="step-title">${item.title}</div>
                </div>
                <div class="step-description">${item.description}</div>
              </div>
            `).join('')}
          </div>
          <div class="footer">
            <p>Provided by Campus Gate - Your Campus Companion</p>
          </div>
        </body>
      </html>
    `);
    
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  const handleGetHelp = () => {
    setCurrentStep('help-options');
  };

  const handleSelectService = (serviceId) => {
    // In a real application, this would navigate to a payment page
    alert(`Redirecting to payment gateway for ${serviceId === 'guided-assistance' ? 'Guided Assistance' : 'Full Clearance Service'}`);
    // For demo purposes, we'll just close the modal
    handleCloseModal();
  };

  if (!userEmail) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header/Navigation */}
      <nav className="bg-white/80 shadow-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-3 md:px-6">
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
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white">
                  {userEmail.charAt(0).toUpperCase()}
                </div>
                <span className="text-gray-600 hidden md:block">{userEmail}</span>
              </div>
              <button
                onClick={handleSignOut}
                className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 hover:shadow-md transition-all duration-300"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto pt-24 px-4 md:px-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back, {userName}!</h1>
          <p className="text-gray-600 mt-2">Here's what's happening with your campus life.</p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Actions Card */}
          <div className="bg-white/70 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button 
                onClick={handleStartClearance}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-2 px-4 rounded-lg hover:shadow-md transition-all duration-300"
              >
                Start Clearance
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300">
                Find Accommodation
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300">
                Study Tools
              </button>
            </div>
          </div>

          {/* Progress Card */}
          <div className="bg-white/70 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Clearance Status</span>
                  <span>60%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full w-3/5"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Accommodation</span>
                  <span>40%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full w-2/5"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Notifications Card */}
          <div className="bg-white/70 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4">Recent Notifications</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm">
                <div className="h-2 w-2 bg-emerald-500 rounded-full"></div>
                <span>New clearance requirement added</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="h-2 w-2 bg-emerald-500 rounded-full"></div>
                <span>Upcoming deadline: Room registration</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="h-2 w-2 bg-emerald-500 rounded-full"></div>
                <span>Study group invitation received</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Clearance Modal */}
      {showClearanceModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 rounded-t-xl">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {currentStep === 'select-school' && 'Select Your School'}
                  {currentStep === 'view-guide' && `Clearance Guide for ${selectedSchool}`}
                  {currentStep === 'help-options' && 'Clearance Assistance Services'}
                </h3>
                <button 
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* School Selection */}
              {currentStep === 'select-school' && (
                <form onSubmit={handleSchoolSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="school" className="block text-sm font-medium text-gray-700">
                      To start your clearance process, please select your institution:
                    </label>
                    <select
                      id="school"
                      value={selectedSchool}
                      onChange={handleSchoolChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="" disabled>Select a school...</option>
                      {nigerianSchools.map((school, index) => (
                        <option key={index} value={school}>
                          {school}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={!selectedSchool}
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 px-4 rounded-lg hover:shadow-md transition-all duration-300 disabled:opacity-50"
                    >
                      View Clearance Guide
                    </button>
                  </div>
                </form>
              )}

              {/* Clearance Guide */}
              {currentStep === 'view-guide' && (
                <div>
                  <div ref={printRef} className="space-y-4 mb-6">
                    {getClearanceGuide(selectedSchool).map((item) => (
                      <div key={item.step} className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200">
                        <div className="flex items-start">
                          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                            {item.step}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">{item.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    <button
                      onClick={handlePrint}
                      className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm0 0V9a2 2 0 012-2h6a2 2 0 012 2v9m-6 0a2 2 0 002 2h0a2 2 0 002-2v0"></path>
                      </svg>
                      Print Clearance Guide
                    </button>
                    
                    <button
                      onClick={handleGetHelp}
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 px-4 rounded-lg hover:shadow-md transition-all duration-300"
                    >
                      Need Help? Get Professional Assistance
                    </button>
                    
                    <button
                      onClick={() => setCurrentStep('select-school')}
                      className="text-emerald-600 hover:text-emerald-800 text-sm flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                      </svg>
                      Change School
                    </button>
                  </div>
                </div>
              )}

              {/* Help Options */}
              {currentStep === 'help-options' && (
                <div className="space-y-6">
                  <p className="text-sm text-gray-600">
                    Get professional assistance with your clearance process at {selectedSchool}. Choose the service that best fits your needs:
                  </p>
                  
                  <div className="space-y-4">
                    {services.map(service => (
                      <div key={service.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-gray-800">{service.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-emerald-600">₦{service.price.toLocaleString()}</span>
                          </div>
                        </div>
                        
                        <div className="mt-3">
                          <p className="text-xs text-gray-500 mb-2">What's included:</p>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="text-sm flex items-start">
                                <svg className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mt-4">
                          <button
                            onClick={() => handleSelectService(service.id)}
                            className={`w-full py-2 px-4 rounded-lg transition-all duration-300 ${
                              service.id === 'full-service'
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-md'
                                : 'border border-emerald-500 text-emerald-600 hover:bg-emerald-50'
                            }`}
                          >
                            Select {service.title}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setCurrentStep('view-guide')}
                    className="text-emerald-600 hover:text-emerald-800 text-sm flex items-center justify-center w-full"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    Back to Clearance Guide
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}