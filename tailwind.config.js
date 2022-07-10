/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [require('flowbite/plugin')],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: 'Poppins, sans-serif',
      },
      colors: {
        'dark-primary': '#42446E',
        'light-primary': '#FFFFFF',
        'light-content': '#A7A7A7',
        'dark-heading': '#1f2428',
        'dark-content': '#666666',
        'light-heading': '#CCCCCC',
        'light-mode': '#FFFFFF',
        'dark-mode': '#191919',
        'dark-card': '#363636',
        'green-text': '#018C0F',
        'green-bg': '#D7FFE0',
      },
    },
  },
};
