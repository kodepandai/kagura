/** @type {import('kagura-ui/contracts/tailwind').Preset} */
module.exports = {
  colors: {
    base: {
      custom: "#ff0000",
    },
  },
  components: {
    button: {
      root: {
        "&-custom": {
          "@apply rounded-lg": {},
        },
      },
    },
  },
}
