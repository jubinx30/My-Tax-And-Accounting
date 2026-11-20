/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF9',
          100: '#FBF9F7', // Warm Alabaster Cream
          200: '#F5EFE9',
          300: '#EDE6E1', // Border color
          400: '#D9C8BE',
        },
        bronze: {
          light: '#BA7A60',
          DEFAULT: '#834F3A', // Earthen Rose Bronze
          dark: '#673D2C',
          hover: '#A46B55',
          soft: '#F4ECE8',
        },
        slateDark: '#1E252D', // Deep Slate Navy
        sage: {
          bg: '#EBF5F0',
          text: '#487A64',
          border: '#D2E8DD',
        },
        terracotta: {
          bg: '#FDF5F2',
          text: '#BA5D48',
          border: '#F7DDD6',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'ambient': '0 2px 8px rgba(30, 37, 45, 0.04)',
        'card': '0 4px 16px -2px rgba(30, 37, 45, 0.05)',
        'floating': '0 12px 32px -4px rgba(131, 79, 58, 0.12), 0 4px 12px rgba(0,0,0,0.06)',
      }
    },
  },
  plugins: [],
}
