/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'darkmain': '#020617 ',
      'simdarkmain' : '#0f172a',
      'main': '#695aa6 ',
      'lite' : '#f8f9fa',
      'dark' : '#111'
    },
    extend: {},
  },
  plugins: [],
  darkMode:'class',

}

