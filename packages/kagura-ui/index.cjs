const plugin = require("tailwindcss/plugin");
const kagura = plugin.withOptions(
  ({ preset = {} } = {}) =>
    ({ addComponents, theme }) => {
      const optComponent = theme("kagura.component");
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
        {
          ".btn": {
            "@apply rounded px-2 py-1": {},
            "&-primary": {
              backgroundColor: "var(--tw-kagura-color-primary)",
              ...optComponent["button"]["primary"],
            },
            ...optComponent["button"]["root"],
          },
        },
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
