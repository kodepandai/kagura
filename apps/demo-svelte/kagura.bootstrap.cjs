/** @type {import('kagura-ui/contracts/tailwind').Preset} */
module.exports = {
  colors: {
    base: {
      custom: "#004400",
    },
  },
  components: {
    button: {
      root: {
        "&-custom": {
          "@apply border-black rounded-none": {},
        },
      },
    },
  },
}
