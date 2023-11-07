/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        italyred: "#C80000",
        italygreen: "#00c848",
      },
      fontFamily: {
        sans: "Gotham SSm A",
      },
    },
  },
  plugins: [],
};