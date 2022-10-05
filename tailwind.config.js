const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
     },
     colors: {
      'hero-yellow': '#e1b868',
    },
    },
    backgroundImage: {
      'hero-background': "url('https://images.squarespace-cdn.com/content/v1/624b3c6de8311d5139f663a3/1649097845101-CLE34J9KWWSKAFRAWTHS/pickle-perfection-v1.jpg?format=1500w')"
    }
  },
  plugins: [],
}
