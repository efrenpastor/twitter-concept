/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      background: '#06141D',
      card: '#1B2730',
      input: '#28343E',
      contrast: '#71808D',
      primary: '#1D95DF',
      error: '#D92E58'
    },
    extend: {}
  },
  plugins: []
}
