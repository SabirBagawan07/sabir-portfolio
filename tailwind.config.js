/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          900: '#134e4a',
        },
        dark: {
          950: '#07090e',
          900: '#0b0f19',
          850: '#111726',
          800: '#172033',
          700: '#232f48',
          600: '#334155',
        },
        accent: {
          cyan: '#06b6d4',
          teal: '#14b8a6',
          emerald: '#10b981',
          blue: '#3b82f6',
          purple: '#8b5cf6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(30px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
