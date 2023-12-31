/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      height: {
        screen: "100dvh",
      },
      colors: {
        italyred: "#C80000",
        italygreen: "#00c848",
      },
      fontFamily: {
        sans: "Gotham SSm A",
      },
      animation: {
        fadein: 'fadeIn 400ms ease-out',
      },
      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
};
