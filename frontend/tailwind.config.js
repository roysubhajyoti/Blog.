/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Playpen: ["Playpen Sans", "cursive"],
      },
      colors: {
        midnight: "#1A202C",
        midnighttext: "#A9D5E0",
        midnightLite: "#7F8EA3",
        midnightLink: "#FFFFFF",
      },
      keyframes: {
        draw: {
          "0%": { strokeDasharray: "0, 100" },
          "100%": { strokeDasharray: "100, 0" },
        },
      },
      animation: {
        draw: "draw 2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
