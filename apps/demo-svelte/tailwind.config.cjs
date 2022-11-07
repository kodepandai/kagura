const kagura = require("kagura-ui");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.svelte", "./node_modules/@kagura-ui/**/{Button,Input}.svelte"],
  theme: {
    extend: {
      kagura: ({ theme }) => ({
        color: {
          primary: "#aaddcc",
        },
        component: {
          button: {
            root: {
              borderRadius: 0,
            },
            primary: {
              backgroundColor: theme("colors.gray.500"),
            },
          },
        },
      }),
    },
  },
  plugins: [kagura({ preset: "bootstrap" })],
};
