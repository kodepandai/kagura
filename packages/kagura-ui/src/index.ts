import plugin from "tailwindcss/plugin";
import root from "./components/root.js"
import { Config } from "./contracts/tailwind.js";
import { createColors } from "./utils.js"
const kagura = plugin.withOptions(
  () =>
    ({ addComponents, theme }) => {

      const preset = theme("kagura") || {}
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
  ({ preset }: Config) => {
    const presetInstance = preset()
    return {
      theme: {
        kagura: presetInstance,
        extend: {
          colors: createColors(presetInstance.colors.text, "text"),
          backgroundColor: createColors(presetInstance.colors.background, "bg"),
          borderColor: createColors(presetInstance.colors.border, "border")
        }
      },
    };
  }
);
export default kagura
