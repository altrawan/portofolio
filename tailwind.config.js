/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Poppins, sans-serif',
      },
      colors: {
        'light-primary': '#42446E',
        'dark-primary': '#FFFFFF',
        'light-content': '#A7A7A7',
        'dark-heading': '#1f2428',
        'dark-content': '#666666',
        'light-heading': '#CCCCCC',
        'dark-mode': '#191919',
        'dark-card': '#363636',
        'green-text': '#018C0F',
        'green-bg': '#D7FFE0',
      },
    },
  },
};
