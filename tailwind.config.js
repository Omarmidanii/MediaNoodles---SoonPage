export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      colors: {
        'noodles-bg': '#F8F8F8',
      },
      fontFamily: {
        'minion': ['minion', 'serif'], 
        'somar': ['somar', 'sans-serif'],
        'Lifta': ['Lifta']
      },
    },
  },
  plugins: [],
}