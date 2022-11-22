import plugin from "tailwindcss/plugin.js";
import root from "./base/root.js"
import { Config, Preset } from "../contracts/tailwind";
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
    let colors = {
      base: {},
      text: {},
      background: {},
      border: {}
    }
    if (!Array.isArray(config)) {
      config = [config]
    }
    config.forEach(({ preset, scope }) => {

      if (scope) {
        kaguraTheme[scope] = preset
      } else {
        kaguraTheme["DEFAULT"] = preset
      }
      const baseColors = {
        ...colors.base,
        ...preset.colors.base
      }
      colors = {
        base: baseColors,
        text: {
          ...baseColors,
          ...colors.text,
          ...preset.colors.text
        },
        background: {
          ...baseColors,
          ...colors.background,
          ...preset.colors.background
        },
        border: {
          ...baseColors,
          ...colors.border,
          ...preset.colors.border
        }
      }
    })
    return {
      theme: {
        kagura: kaguraTheme,
        extend: {
          colors: createColors(colors.base as Preset["colors"]["base"], ""),
          textColor: createColors(colors.text as Preset["colors"]["text"], "text"),
          backgroundColor: createColors(colors.background as Preset["colors"]["background"], "bg"),
          borderColor: createColors(colors.border as Preset["colors"]["border"], "border"),
        }
      },
    };
  }
);

export default kagura
