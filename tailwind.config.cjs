// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans"', ...fontFamily.sans],
      },

      keyframes: {
        textRotating: {
          "5%": {
            transform: "translateY(-100%)",
          },
          "30%": {
            transform: "translateY(-100%)",
          },
          "35%": {
            transform: "translateY(-200%)",
          },
          "60%": {
            transform: "translateY(-200%)",
          },
          "65%": {
            transform: "translateY(-300%)",
          },
          "75%": {
            transform: "translateY(-300%)",
          },
          "85%": {
            transform: "translateY(-400%)",
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
