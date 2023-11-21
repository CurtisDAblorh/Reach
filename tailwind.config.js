/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bluebg2': "url('/src/assets/bluebg2.jpg')",
      }},
  },
  plugins: [],
}

