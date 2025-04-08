import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase';
import UserDashboard from './dashboard/UserDashboard';
import ManagerDashboard from './dashboard/ManagerDashboard';
import AdminDashboard from './dashboard/AdminDashboard';

export default function DashboardLayout({ userEmail }) {
  const [userRole, setUserRole] = useState(null);
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [campus, setCampus] = useState('University of Lagos'); // Default campus for manager

  useEffect(() => {
    if (!userEmail) return;

    // Extract name from email (before @) and remove any numbers
    const nameFromEmail = userEmail.split('@')[0].replace(/[0-9]/g, '');
    // Capitalize first letter
    const formattedName = nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);
    setUserName(formattedName);

    // Check user role from profiles table
    const getUserRole = async () => {
      setIsLoading(true);
      try {
        // First check if the user exists in the profiles table
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('role')
          .eq('email', userEmail)
          .single();

        if (profileError && profileError.code !== 'PGRST116') {
          console.error('Error fetching user profile:', profileError);
          setUserRole('user'); // Default to user role if there's an error
        } else if (profileData) {
          setUserRole(profileData.role);
          
          // If user is a manager, fetch their assigned campus
          if (profileData.role === 'manager') {
            const { data: managerData, error: managerError } = await supabase
              .from('manager_assignments')
              .select('campus')
              .eq('email', userEmail)
              .single();
              
            if (!managerError && managerData) {
              setCampus(managerData.campus);
            }
          }
        } else {
          // If no profile exists, check email domain for role determination
          if (userEmail.includes('admin')) {
            setUserRole('admin');
          } else if (userEmail.includes('manager')) {
            setUserRole('manager');
          } else {
            setUserRole('user');
          }
        }
      } catch (error) {
        console.error('Error in getUserRole:', error);
        setUserRole('user'); // Default to user role if there's an error
      } finally {
        setIsLoading(false);
      }
    };

    getUserRole();
  }, [userEmail]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  // Render the appropriate dashboard based on user role
  if (userRole === 'admin') {
    return <AdminDashboard userEmail={userEmail} userName={userName} />;
  } else if (userRole === 'manager') {
    return <ManagerDashboard userEmail={userEmail} userName={userName} campus={campus} />;
  } else {
    return <UserDashboard userEmail={userEmail} userName={userName} />;
  }
}