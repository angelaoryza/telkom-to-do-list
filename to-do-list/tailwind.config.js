/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'caveat': ['caveat', 'handwriting'],
        'sigmar':['sigmar one', 'display'],
        'roboto' : ['roboto mono', 'monospace'],
        'allura' : ['allura', 'handwriting']
      },
    },
  },
  plugins: [],
}