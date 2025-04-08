import { mockSupabase, isMockConfigured } from './mockData';

// This file now uses mock data instead of actual Supabase integration
console.log('Using mock data instead of Supabase database integration');

// Export the mock Supabase client to be used throughout the application
export const supabase = mockSupabase;

// Helper function to check if Supabase is properly configured
// Now always returns true since we're using mock data
export const isSupabaseConfigured = () => {
  return isMockConfigured();
};

// Mock connectivity check function
export const checkSupabaseConnectivity = async () => {
  // Always return connected since we're using mock data
  return { connected: true };
};

// Log that we're using mock data
console.log('Mock data is being used instead of Supabase. Database integration has been removed.');