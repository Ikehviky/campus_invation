import React from 'react';

export default function AdminDashboard({ userEmail, userName }) {
  // Mock data for system statistics
  const systemStats = {
    totalUsers: 5872,
    totalCampuses: 15,
    totalManagers: 18,
    activeServices: 2,
    totalRevenue: 12750000
  };

  // Mock data for campus performance
  const campusPerformance = [
    { campus: 'University of Lagos', students: 1245, clearances: 387, revenue: 4250000 },
    { campus: 'University of Ibadan', students: 982, clearances: 256, revenue: 2850000 },
    { campus: 'Federal University of Technology, Akure', students: 763, clearances: 198, revenue: 1950000 },
    { campus: 'Ahmadu Bello University', students: 1105, clearances: 312, revenue: 3450000 },
    { campus: 'University of Nigeria, Nsukka', students: 845, clearances: 231, revenue: 2350000 }
  ];

  // Mock data for recent user registrations
  const recentUsers = [
    { id: 'U-1001', name: 'John Doe', email: 'john.doe@example.com', role: 'user', date: '2023-09-15' },
    { id: 'U-1002', name: 'Jane Smith', email: 'jane.smith@example.com', role: 'user', date: '2023-09-14' },
    { id: 'U-1003', name: 'Michael Johnson', email: 'michael.j@example.com', role: 'manager', date: '2023-09-12' },
    { id: 'U-1004', name: 'Sarah Williams', email: 'sarah.w@example.com', role: 'user', date: '2023-09-10' },
    { id: 'U-1005', name: 'Robert Brown', email: 'robert.b@example.com', role: 'user', date: '2023-09-09' }
  ];

  // Role color mapping
  const getRoleColor = (role) => {
    switch (role) {
      case 'admin':
        return 'bg-purple-100 text-purple-800';
      case 'manager':
        return 'bg-blue-100 text-blue-800';
      case 'user':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="container mx-auto pt-6 px-4 md:px-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">System-wide management and controls</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="text-sm text-gray-500">Total Users</p>
            <p className="text-2xl font-bold text-gray-800">{systemStats.totalUsers.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="text-sm text-gray-500">Campuses</p>
            <p className="text-2xl font-bold text-emerald-600">{systemStats.totalCampuses}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="text-sm text-gray-500">Managers</p>
            <p className="text-2xl font-bold text-blue-600">{systemStats.totalManagers}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="text-sm text-gray-500">Active Services</p>
            <p className="text-2xl font-bold text-purple-600">{systemStats.activeServices}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="text-sm text-gray-500">Total Revenue</p>
            <p className="text-2xl font-bold text-indigo-600">₦{systemStats.totalRevenue.toLocaleString()}</p>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Campus Performance */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800">Campus Performance</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campus</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clearances</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {campusPerformance.map((campus, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{campus.campus}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campus.students.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campus.clearances.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₦{campus.revenue.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-3 border-t border-gray-100 bg-gray-50">
              <button className="text-sm text-emerald-600 hover:text-emerald-800 font-medium">View All Campuses</button>
            </div>
          </div>

          {/* Recent User Registrations */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800">Recent User Registrations</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleColor(user.role)}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-3 border-t border-gray-100 bg-gray-50">
              <button className="text-sm text-emerald-600 hover:text-emerald-800 font-medium">View All Users</button>
            </div>
          </div>
        </div>

        {/* Admin Actions */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Admin Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors">
              Manage Users
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-50 transition-colors">
              Manage Campuses
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-50 transition-colors">
              System Settings
            </button>
          </div>
        </div>

        {/* Service Management */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Service Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-800">Guided Assistance</h3>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Step-by-step guidance from our agents</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-emerald-600">₦15,000</span>
                <button className="text-sm text-red-600 hover:text-red-800 font-medium">Disable Service</button>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-800">Full Clearance Service</h3>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">End-to-end clearance management</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-emerald-600">₦50,000</span>
                <button className="text-sm text-red-600 hover:text-red-800 font-medium">Disable Service</button>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors">
              Add New Service
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}