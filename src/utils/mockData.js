/**
 * This file contains mock data and utility functions to replace Supabase database integration
 */

// Mock user data
const users = [
  {
    id: '1',
    email: 'user@example.com',
    password: 'password123', // In a real app, passwords would be hashed
    role: 'user'
  },
  {
    id: '2',
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin'
  },
  {
    id: '3',
    email: 'manager@example.com',
    password: 'manager123',
    role: 'manager',
    campus: 'University of Lagos'
  },
  {
    id: '4',
    email: 'manager2@example.com',
    password: 'manager123',
    role: 'manager',
    campus: 'University of Ibadan'
  }
];

// Mock profiles data
const profiles = [
  {
    id: '1',
    role: 'user'
  },
  {
    id: '2',
    role: 'admin'
  },
  {
    id: '3',
    role: 'manager',
    campus: 'University of Lagos'
  },
  {
    id: '4',
    role: 'manager',
    campus: 'University of Ibadan'
  }
];

// Mock session storage
let currentSession = null;

// Mock auth functions
const auth = {
  signInWithPassword: async ({ email, password }) => {
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      return { data: {}, error: { message: 'Invalid login credentials' } };
    }
    
    currentSession = { user };
    localStorage.setItem('mockSession', JSON.stringify(currentSession));
    
    return { data: { user }, error: null };
  },
  
  signUp: async ({ email, password }) => {
    const existingUser = users.find(u => u.email === email);
    
    if (existingUser) {
      return { data: {}, error: { message: 'User already exists' } };
    }
    
    const newUser = {
      id: String(users.length + 1),
      email,
      password,
      role: 'user'
    };
    
    users.push(newUser);
    profiles.push({ id: newUser.id, role: 'user' });
    
    currentSession = { user: newUser };
    localStorage.setItem('mockSession', JSON.stringify(currentSession));
    
    return { data: { user: newUser }, error: null };
  },
  
  signInWithOAuth: async ({ provider, options }) => {
    // Mock OAuth sign-in (in a real implementation, this would redirect to the provider)
    console.log(`Mock OAuth sign-in with ${provider}`);
    return { data: { provider, url: options.redirectTo }, error: null };
  },
  
  signOut: async () => {
    currentSession = null;
    localStorage.removeItem('mockSession');
    return { error: null };
  },
  
  getSession: async () => {
    // Try to get session from localStorage for persistence
    if (!currentSession) {
      try {
        const savedSession = localStorage.getItem('mockSession');
        if (savedSession) {
          currentSession = JSON.parse(savedSession);
        }
      } catch (error) {
        console.error('Error retrieving mock session:', error);
      }
    }
    
    return { data: { session: currentSession } };
  },
  
  getUser: async () => {
    // Try to get user from localStorage for persistence
    if (!currentSession) {
      try {
        const savedSession = localStorage.getItem('mockSession');
        if (savedSession) {
          currentSession = JSON.parse(savedSession);
        }
      } catch (error) {
        console.error('Error retrieving mock user:', error);
      }
    }
    
    return { data: { user: currentSession?.user || null } };
  },
  
  onAuthStateChange: (callback) => {
    // In a real implementation, this would set up event listeners
    // For our mock, we'll just return a dummy unsubscribe function
    return {
      data: {
        subscription: {
          unsubscribe: () => {}
        }
      }
    };
  }
};

// Mock database query functions
const from = (table) => {
  let data = [];
  
  if (table === 'profiles') {
    data = profiles;
  }
  // Add other tables as needed
  
  return {
    select: (fields) => {
      return {
        eq: (field, value) => {
          return {
            single: () => {
              const result = data.find(item => item[field] === value);
              return { data: result, error: null };
            }
          };
        }
      };
    }
  };
};

// Mock Supabase client
export const mockSupabase = {
  auth,
  from
};

// Helper function to check if mock configuration is enabled
export const isMockConfigured = () => true;