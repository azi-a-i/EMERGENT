/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#015C4B',
          50: '#E6F7F4',
          100: '#CCF0E9',
          200: '#99E1D3',
          300: '#66D2BD',
          400: '#33C3A7',
          500: '#015C4B',
          600: '#014A3C',
          700: '#01382D',
          800: '#01261E',
          900: '#00140F',
        },
        accent: {
          DEFAULT: '#C2A14D',
          50: '#F9F5EB',
          100: '#F3EBD7',
          200: '#E7D7AF',
          300: '#DBC387',
          400: '#CFAF5F',
          500: '#C2A14D',
          600: '#9B813D',
          700: '#74612E',
          800: '#4D401F',
          900: '#262010',
        },
        neutral: {
          dark: '#1B1B1B',
          light: '#F4F4F4',
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};