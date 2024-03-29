import plugin from "tailwindcss/plugin.js";
import root from "./base/root.js";
import { Config, Preset } from "./contracts";
import { createColors } from "./utils.js";
import button from "./components/button.js";
import input from "./components/input.js";
import inputWrapper from "./components/inputWrapper.js";
import select from "./components/select.js";
import textarea from "./components/textarea.js";
import group from "./components/group.js";
import checkbox from "./components/checkbox.js";

export default plugin.withOptions(
  () =>
    ({ addComponents, theme, addBase }) => {
      addBase(root(theme));
      //
      addComponents(button(theme));
      addComponents(checkbox(theme));
      addComponents(group(theme));
      addComponents(input(theme));
      addComponents(inputWrapper(theme));
      addComponents(select(theme));
      addComponents(textarea(theme));
    },
  (config: Config | Config[]) => {
    let kaguraTheme: Record<string, Preset> = {};
    let colors: Preset["colors"] = {
      base: {},
      text: {},
      background: {},
      border: {},
    };
    if (!Array.isArray(config)) {
      config = [config];
    }
    config.forEach(({ preset, scope }) => {
      preset.colors = {
        ...preset.colors,
        text: {
          ...preset.colors?.base,
          ...preset.colors?.text,
        },
        background: {
          ...preset.colors?.base,
          ...preset.colors?.background,
        },
        border: {
          ...preset.colors?.base,
          ...preset.colors?.border,
        },
      };
      if (scope) {
        kaguraTheme[scope] = preset;
      } else {
        kaguraTheme["DEFAULT"] = preset;
      }
      const baseColors = {
        ...colors?.base,
        ...preset.colors?.base,
      };
      colors = {
        base: baseColors,
        text: {
          ...baseColors,
          ...colors?.text,
          ...preset.colors?.text,
        },
        background: {
          ...baseColors,
          ...colors?.background,
          ...preset.colors?.background,
        },
        border: {
          ...baseColors,
          ...colors?.border,
          ...preset.colors?.border,
        },
      };
    });

    return {
      theme: {
        kagura: kaguraTheme,
        extend: {
          colors: createColors(colors.base || {}, ""),
          textColor: createColors(colors?.text || {}, "text"),
          backgroundColor: createColors(colors?.background || {}, "bg", true),
          borderColor: createColors(colors?.border || {}, "border"),
        },
      },
    };
  },
);
