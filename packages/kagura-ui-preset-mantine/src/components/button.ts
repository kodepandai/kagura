import { Colors, HexColor, Preset, PresetContext, Theme } from "kagura-ui/contracts/tailwind";
import { ButtonColor } from "kagura-ui/contracts/button";
import { shadeColor } from "./color.js"
const createColor = (colors: Preset["colors"], color: ButtonColor) => {
  return {
    [`&-${color}`]: {
      "--tw-kagura-button-base-color": `var(--tw-kagura-${color})`,
      "--tw-kagura-button-text-color": "#ffffff",
      "--tw-kagura-button-bg-color": `var(--tw-kagura-bg-${color})`,
      "--tw-kagura-button-border-color": "transparent",
      "&:hover": {
        [`--tw-kagura-bg-${color}`]: shadeColor(colors?.background?.[color] as HexColor, 15),
        [`--tw-kagura-border-${color}`]: shadeColor(colors?.border?.[color] as HexColor, 20),
      },
    }
  }
}

export const button = ({ preset }: PresetContext) => {
  const colors = preset.colors
  const buttonColors = Object.keys(colors?.base || {})
    .reduce((collect, key) => ({ ...collect, ...createColor(colors, key) }), {})
  return {
    root: {
      "@apply px-[18px] text-left h-9 rounded font-semibold w-auto relative text-sm border inline-block": {},
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      transition: "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
      color: "var(--tw-kagura-button-text-color)",
      backgroundColor: "var(--tw-kagura-button-bg-color)",
      borderColor: "var(--tw-kagura-button-border-color)",
      "&:active": {
        transform: "translateY(1px)"
      },
      ...buttonColors,
      "&-outline": {
        "--tw-kagura-button-text-color": "var(--tw-kagura-button-base-color)",
        "--tw-kagura-button-border-color": "var(--tw-kagura-button-base-color)",
        "--tw-kagura-button-bg-color": "transparent",
      }
    },
    inner: {
      "@apply text-left flex items-center justify-center h-full overflow-visible": {}
    },
    label: {
      "@apply whitespace-nowrap h-full flex items-center overflow-hidden": {}
    }
  }
}
