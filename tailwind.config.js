/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'notion': {
          white: '#ffffff',
          'off-white': '#f9f9f9',
          'light-gray-1': '#f5f5f5',
          'light-gray-2': '#eaeaea',
          'gray-1': '#e0e0e0',
          'gray-2': '#c6c6c6',
          'gray-3': '#a3a3a3',
          'gray-4': '#737373',
          'dark-gray': '#333333',
          black: '#191919',
          primary: '#10b981',
          'primary-light': '#d1fae5',
          'primary-dark': '#065f46'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'notion-sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'notion-md': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'notion-lg': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        'notion-sm': '3px',
        'notion-md': '6px',
        'notion-lg': '8px',
        'notion-xl': '12px',
      },
    },
  },
  plugins: [],
}