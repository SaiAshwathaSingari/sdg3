module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#0f172a',
        'medical-cyan': '#06b6d4',
        'neon-teal': '#5eead4'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient-pulse': 'gradient-pulse 3s ease infinite',
      },
      keyframes: {
        'gradient-pulse': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}





