/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          dark: '#1e3a8a',
        },
        secondary: {
          DEFAULT: '#f59e0b',
          dark: '#d97706',
        },
      },
    },
  },
  plugins: [],
}