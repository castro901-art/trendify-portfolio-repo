/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        trendifyPurple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          500: '#7c3aed',
          700: '#6b21a8'
        }
      }
    }
  },
  plugins: [],
}
