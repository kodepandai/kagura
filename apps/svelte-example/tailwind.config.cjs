const kagura = require("kagura-ui");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.svelte"
  ],
  theme: {
    extend: {},
  },
  plugins: [kagura],
};
