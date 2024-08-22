/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust based on your project structure and file extensions
  ],
  theme: {
    extend: {
      fontFamily: {
        'font-aspekta': ['"Tex Aspekta"', 'sans-serif'],
      },
      padding: {
        'custom-blue': "100px",
      },  
    },
  },
  plugins: [],
}
