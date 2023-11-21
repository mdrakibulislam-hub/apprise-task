/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {



          "primary": "#fff089",



          "secondary": "#007aff",



          "accent": "#008379",



          "neutral": "#3c2329",



          "base-100": "#F7F7F7",



          "info": "#00d2eb",



          "success": "#00be84",



          "warning": "#c65b00",



          "error": "#dc003c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

