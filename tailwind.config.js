/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bangla: ["'Noto Sans Bengali'", "sans-serif"],
        heading: ["'Noto Sans Bengali'", "'Poppins'", "sans-serif"]
      },
      colors: {
        ott: {
          red: "#e50914",
          dark: "#0a0a0f",
          card: "#14141d",
          gold: "#f59e0b",
          blue: "#0284c7"
        }
      }
    },
  },
  plugins: [],
}
