/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#fff",
        blue: "#66FCF1",
        darkblue: "#202833",
        gray: "#ECECEC",
        dblue: "#45A29F",
      },
      flexShrink: {
        2: "2",
      },
      screens: {
        custom: "864px",
      },
    },
  },
  plugins: [],
};
