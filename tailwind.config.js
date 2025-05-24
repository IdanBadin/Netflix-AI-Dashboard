/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'netflix-red': '#E50914',
        'netflix-red-light': '#F40612',
        'netflix-dark': '#141414',
        'netflix-black': '#000000',
        'netflix-gray': '#808080',
        'netflix-light-gray': '#B3B3B3',
        'netflix-darker-gray': '#181818',
        'netflix-card': '#2F2F2F',
        'netflix-hover': '#4d4d4d',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'netflix': '0 4px 10px rgba(229, 9, 20, 0.1)',
        'netflix-hover': '0 8px 16px rgba(229, 9, 20, 0.2)',
        'netflix-glow': '0 0 15px rgba(229, 9, 20, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px rgba(229, 9, 20, 0.3)' },
          '100%': { textShadow: '0 0 15px rgba(229, 9, 20, 0.7), 0 0 20px rgba(229, 9, 20, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        counter: {
          '0%': { opacity: 0.5, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};