import React from 'react';

export default function ManagerDashboard({ userEmail, userName, campus }) {
  // Mock data for campus statistics
  const campusStats = {
    totalStudents: 3245,
    newRegistrations: 128,
    pendingClearances: 87,
    completedClearances: 42,
    revenueGenerated: 2450000
  };

  // Mock data for recent clearance requests
  const recentClearanceRequests = [
    { id: 'CR-1001', studentName: 'John Doe', service: 'Guided Assistance', status: 'Pending', date: '2023-09-15' },
    { id: 'CR-1002', studentName: 'Jane Smith', service: 'Full Clearance', status: 'In Progress', date: '2023-09-14' },
    { id: 'CR-1003', studentName: 'Michael Johnson', service: 'Guided Assistance', status: 'Completed', date: '2023-09-12' },
    { id: 'CR-1004', studentName: 'Sarah Williams', service: 'Full Clearance', status: 'Pending', date: '2023-09-10' },
    { id: 'CR-1005', studentName: 'Robert Brown', service: 'Guided Assistance', status: 'In Progress', date: '2023-09-09' }
  ];

  // Mock data for clearance steps completion
  const clearanceStepsCompletion = [
    { step: 'Online Registration', completed: 215, pending: 42 },
    { step: 'Faculty Clearance', completed: 187, pending: 70 },
    { step: 'Library Clearance', completed: 156, pending: 101 },
    { step: 'Fees Verification', completed: 132, pending: 125 },
    { step: 'ID Card Collection', completed: 98, pending: 159 }
  ];

  // Status color mapping
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Main Content */}
      <main className="container mx-auto pt-6 px-4 md:px-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Campus Manager Dashboard</h1>
          <p className="text-gray-600 mt-2">Managing {campus} clearance processes</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="text-sm text-gray-500">Total Students</p>
            <p className="text-2xl font-bold text-gray-800">{campusStats.totalStudents.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="text-sm text-gray-500">New Registrations</p>
            <p className="text-2xl font-bold text-emerald-600">+{campusStats.newRegistrations}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="text-sm text-gray-500">Pending Clearances</p>
            <p className="text-2xl font-bold text-yellow-600">{campusStats.pendingClearances}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="text-sm text-gray-500">Completed</p>
            <p className="text-2xl font-bold text-green-600">{campusStats.completedClearances}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="text-sm text-gray-500">Revenue</p>
            <p className="text-2xl font-bold text-indigo-600">₦{campusStats.revenueGenerated.toLocaleString()}</p>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Recent Clearance Requests */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800">Recent Clearance Requests</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentClearanceRequests.map((request) => (
                    <tr key={request.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{request.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.studentName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.service}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(request.status)}`}>
                          {request.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-3 border-t border-gray-100 bg-gray-50">
              <button className="text-sm text-emerald-600 hover:text-emerald-800 font-medium">View All Requests</button>
            </div>
          </div>

          {/* Clearance Steps Completion */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800">Clearance Steps Completion</h2>
            </div>
            <div className="p-6 space-y-4">
              {clearanceStepsCompletion.map((step, index) => {
                const total = step.completed + step.pending;
                const completedPercentage = Math.round((step.completed / total) * 100);
                
                return (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-700">{step.step}</span>
                      <span className="text-gray-500">{completedPercentage}% Complete</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" 
                        style={{ width: `${completedPercentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1 text-gray-500">
                      <span>{step.completed} Completed</span>
                      <span>{step.pending} Pending</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 px-4 rounded-lg hover:shadow-md transition-all duration-300">
            Manage Clearance Process
          </button>
          <button className="bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300">
            Generate Reports
          </button>
          <button className="bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300">
            Update Clearance Requirements
          </button>
        </div>
      </main>
    </div>
  );
}