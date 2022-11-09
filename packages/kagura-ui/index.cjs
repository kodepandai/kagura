const plugin = require("tailwindcss/plugin");
const kagura = plugin.withOptions(
  ({ preset = ({ theme }) => ({}) } = {}) =>
    ({ addComponents, theme }) => {
      const presetObject = preset({ theme });
      const optColor = theme("kagura.color") || {};
      addComponents([
        {
          ":root": {
            "--tw-kagura-color-primary": "green",
            "--tw-kagura-color-secondary": "blue",
          },
        },
        ...Object.entries(optColor).map(([key, value]) => ({
          ":root": {
            [`--tw-kagura-color-${key}`]: value,
          },
        })),
        presetObject.component
      ]);
    },
  () => {
    return {
      theme: {
        kagura: {
          colors: {},
        },
      },
    };
  }
);
module.exports = kagura;
