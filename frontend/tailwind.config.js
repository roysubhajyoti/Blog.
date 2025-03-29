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
        darkblueuser: "#2C3E50",
      },
      keyframes: {
        draw: {
          "0%": { strokeDasharray: "0, 100" },
          "100%": { strokeDasharray: "100, 0" },
        },
        dot: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        draw: "draw 2s ease-in-out forwards",
        dot: "dot .5s steps(1) infinite",
      },
    },
  },
  plugins: [],
};
