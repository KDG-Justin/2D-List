/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        pixel: ["VT323"], 
      }
    },
  },
  plugins: [],
}

