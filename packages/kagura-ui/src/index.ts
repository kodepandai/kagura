import plugin from "tailwindcss/plugin";
import root from "./base/root.js"
import { Config, Preset } from "../contracts/tailwind.js";
import { createColors } from "./utils.js"
import button from "./components/button.js";
const kagura = plugin.withOptions(
  () =>
    ({ addComponents, theme, addBase }) => {

      addBase(root(theme))
      //
      addComponents(button(theme));
    },
  (config: Config | Config[]) => {
    let kaguraTheme: Record<string, Preset> = {}
    if (!Array.isArray(config)) {
      config = [config]
    }
    config.forEach(c => {
      const preset = c.preset()
      if (c.scope) {
        kaguraTheme[c.scope] = preset
      } else {
        kaguraTheme["DEFAULT"] = preset
      }
    })
    return {
      theme: {
        kagura: kaguraTheme,
        extend: {
          color: createColors(config[0].preset().colors.text, "text"),
          backgroundColor: createColors(config[0].preset().colors.background, "bg"),
          borderColor: createColors(config[0].preset().colors.border, "border"),
        }
      },
    };
  }
);

export default kagura
