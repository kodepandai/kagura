import plugin from "tailwindcss/plugin";
import root from "./components/root.js"
import { Config } from "../contracts/tailwind.js";
import { createColors } from "./utils.js"
import button from "./components/button.js";
const kagura = plugin.withOptions(
  () =>
    ({ addComponents, theme }) => {

      addComponents([
        root(theme),
        button(theme)
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
