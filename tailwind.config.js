/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pro-red': '#BC1A45',
        'pro-melon':'#FFD369',
        'pro-grey': '#DDDDDD',
        'pro-white': '#F7F7F7',
      },
    },
  },
  plugins: [],
}

