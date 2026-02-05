/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: "#0a0a0a",
        primary: "#3b82f6", // Blue-500
        secondary: "#10b981", // Emerald-500
        accent: "#8b5cf6", // Violet-500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
