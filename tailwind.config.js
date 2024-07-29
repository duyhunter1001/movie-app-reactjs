/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E68369',
        'second': '#ECCEAE',
        'light': '#FBF6E2',
        'overview': '#0C0C0C'
      }
    },
  },
  plugins: [],
}

