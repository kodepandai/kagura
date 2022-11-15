const kagura = require("kagura-ui");
const bootstrap = require('@kagura-ui/preset-bootstrap')
const mantine = require('@kagura-ui/preset-mantine')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.svelte", "./node_modules/@kagura-ui/**/{Button,Input}.svelte"],
  theme: {
    extend: {
      kagura: ({ theme }) => ({
        // you can overide kagura theme here.
        // default is using from preset
      }),
    },
  },
  plugins: [
    // multi preset example
    kagura([
      { preset: mantine, scope: "mantine" },
      { preset: bootstrap, scope: "bootstrap" }
    ]),
    // single preset example
    // kagura({ preset: bootstrap })
  ],
};
