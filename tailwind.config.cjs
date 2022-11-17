// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto_sans)", ...fontFamily.sans],
      },
      keyframes: {
        textRotating: {
          "10%": {
            transform: "translateY(-104%)",
          },
          "25%": {
            transform: "translateY(-100%)",
          },
          "35%": {
            transform: "translateY(-204%)",
          },
          "50%": {
            transform: "translateY(-200%)",
          },
          "60%": {
            transform: "translateY(-304%)",
          },
          "75%": {
            transform: "translateY(-300%)",
          },
          "85%": {
            transform: "translateY(-404%)",
          },
          "100%": {
            transform: "translateY(-400%)",
          },
        },
      },
    },
  },
  plugins: [],
};
