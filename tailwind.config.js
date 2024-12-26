/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'beige': {
          DEFAULT: '#f3eecd',
          light: '#faf7e6'
        }
      },
    },
  },
  plugins: [],
};
