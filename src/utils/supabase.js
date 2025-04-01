import { createClient } from '@supabase/supabase-js';

// Check if environment variables are available
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase credentials not found. Please check your .env file or click the "Connect to Supabase" button.'
  );
}

// Function to check if the Supabase URL is reachable
const isUrlReachable = async (url) => {
  try {
    // Extract just the domain from the URL
    const domain = new URL(url).hostname;
    console.log('Checking connectivity to:', domain);
    
    // Try to fetch just the domain to check connectivity
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
    
    await fetch(`https://${domain}/`, { 
      method: 'HEAD',
      signal: controller.signal,
      mode: 'no-cors' // This allows us to check connectivity without CORS issues
    });
    
    clearTimeout(timeoutId);
    return true;
  } catch (error) {
    console.warn('Supabase connectivity check failed:', error.message);
    return false;
  }
}

// Create Supabase client with options for better error handling
export const supabase = createClient(
  supabaseUrl || 'http://placeholder-url.com',
  supabaseAnonKey || 'placeholder-key',
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    },
    global: {
      fetch: (...args) => {
        return fetch(...args).catch(err => {
          console.error('Supabase fetch error:', err);
          // Add more detailed error information for network issues
          if (err.message === 'Failed to fetch') {
            console.error('Network connectivity issue detected. This may be due to:');
            console.error('- DNS resolution problems with the Supabase domain');
            console.error('- Internet connection issues');
            console.error('- Firewall or proxy blocking the connection');
            console.error('Please check your network settings and try again.');
          }
          throw err;
        });
      }
    }
  }
);

// Log initialization status
console.log('Supabase client initialized with URL:', supabaseUrl ? 'Valid URL' : 'Missing URL');

// Enhanced configuration check that includes connectivity verification
export const isSupabaseConfigured = () => {
  return Boolean(supabaseUrl && supabaseAnonKey);
};

// Function to check Supabase connectivity
export const checkSupabaseConnectivity = async () => {
  if (!isSupabaseConfigured()) {
    return { connected: false, error: 'Supabase credentials not configured' };
  }
  
  try {
    // Try a simple request to check connectivity
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
    
    const response = await fetch(supabaseUrl, { 
      method: 'HEAD',
      signal: controller.signal,
      mode: 'no-cors' // This allows us to check connectivity without CORS issues
    });
    
    clearTimeout(timeoutId);
    return { connected: true };
  } catch (error) {
    console.warn('Supabase connectivity check failed:', error.message);
    return { 
      connected: false, 
      error: error.message === 'Failed to fetch' ? 
        'Network error: Unable to connect to Supabase. This may be due to DNS resolution issues or network connectivity problems.' : 
        error.message 
    };
  }
};