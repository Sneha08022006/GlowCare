/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        blush: {
          50: '#fdf5f7',
          100: '#f7e5e8',
          200: '#eccfd6',
          300: '#e0b3c0',
          400: '#d98a9b',
          500: '#c97386',
          600: '#b96b7e',
          700: '#9a5263',
        },
        beige: {
          50: '#fbf7f0',
          100: '#f5efe6',
          200: '#e8ddca',
          300: '#dcc9aa',
          400: '#c9b08a',
        },
        cream: '#fffaf6',
        ink: '#3a2e2b',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(185, 107, 126, 0.25)',
        'soft-lg': '0 24px 60px -18px rgba(185, 107, 126, 0.35)',
      },
    },
  },
  plugins: [],
};
