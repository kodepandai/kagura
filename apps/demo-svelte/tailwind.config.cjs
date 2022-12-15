const kagura = require("kagura-ui")
const bootstrap = require("@kagura-ui/preset-bootstrap")
const mantine = require("@kagura-ui/preset-mantine")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.svelte"],
  theme: {
    extend: {},
  },
  plugins: [
    // multi preset example
    kagura([
      {
        preset: mantine(require("./kagura.mantine.cjs")),
        scope: "mantine",
      },
      {
        preset: bootstrap(require("./kagura.bootstrap.cjs")),
        scope: "bootstrap",
      },
    ]),
    // single preset example
    // kagura({ preset: bootstrap })
  ],
};
