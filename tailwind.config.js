/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aqua: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        cream: {
          50: '#fefdf9',
          100: '#fdfbf2',
          200: '#faf6e1',
          300: '#f7f0cf',
          400: '#f1e4ad',
          500: '#ebd88b',
          600: '#d4c27d',
          700: '#b1a268',
          800: '#8e8254',
          900: '#746a45',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        'subtle': '0 2px 15px rgba(0, 0, 0, 0.05)',
        'hover': '0 10px 40px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}