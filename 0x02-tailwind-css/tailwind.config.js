/** @type {import('tailwindcss').Config} */
module.exports = {
  // This tells Tailwind to scan all HTML and JS files inside the 'src' directory
  // for Tailwind class names so it can generate the necessary CSS.
  content: ["./src/**/*.{html,js}"], 
  theme: {
    extend: {},
  },
  plugins: [],
}