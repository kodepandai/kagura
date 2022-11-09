const plugin = require("tailwindcss/plugin");
const root = require("./components/root.cjs");
const { createColors } = require("./utils.cjs");
const kagura = plugin.withOptions(
  () =>
    ({ addComponents, theme }) => {

      const preset = theme("kagura")
      addComponents([
        {
          ":root": root(theme),
        },
        {
          ".button": {
            ...preset.components.button.root,
            "&-primary": preset.components.button.primary,
            "&-secondary": preset.components.button.secondary,
            "&-hover": preset.components.button.hover
          },
        }
      ]);
    },
  ({ preset }) => {
    const presetInstance = preset()
    return {
      theme: {
        kagura: {
          colors: presetInstance.colors,
          components: presetInstance.components
        },
        extend: {
          colors: createColors(presetInstance.colors.text, "text"),
          backgroundColor: createColors(presetInstance.colors.background, "bg"),
          borderColor: createColors(presetInstance.colors.border, "border")
        }
      },
    };
  }
);
module.exports = kagura;
