import { HexColor, Preset, PresetContext, RequiredColors } from "kagura-ui/contracts/tailwind";
import { shadeColor, tintColor } from "./color.js"
const TINTABLE = ["warning", "info", "dark"]
const createButton = (colors: Preset["colors"], color: keyof RequiredColors, className = "") => ({
  [`&-${color}`]: {
    [`@apply bg-${color} border-${color} ${className}`]: {},
    "&:hover": {
      [`--tw-kagura-bg-${color}`]: TINTABLE.includes(color) ? tintColor(colors?.background?.[color] as HexColor, 15) : shadeColor(colors?.background?.[color] as HexColor, 15),
      [`--tw-kagura-border-${color}`]: TINTABLE.includes(color) ? tintColor(colors?.background?.[color] as HexColor, 10) : shadeColor(colors?.background?.[color] as HexColor, 20),
    },
    "&:active": {
      [`--tw-kagura-bg-${color}`]: TINTABLE.includes(color) ? tintColor(colors?.background?.[color] as HexColor, 20) : shadeColor(colors?.background?.[color] as HexColor, 20),
      [`--tw-kagura-border-${color}`]: TINTABLE.includes(color) ? tintColor(colors?.background?.[color] as HexColor, 10) : shadeColor(colors?.background?.[color] as HexColor, 25),
    }
  }
})

export const button = ({ preset }: PresetContext) => {
  const colors = preset.colors
  return {
    root: {
      "@apply inline-block font-normal text-center whitespace-nowrap align-middle select-none border border-transparent py-1.5 px-3 rounded text-base": {},
      transition: "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
      ...createButton(colors, "primary", "text-white"),
      ...createButton(colors, "secondary", "text-white"),
      ...createButton(colors, "success", "text-white"),
      ...createButton(colors, "danger", "text-white"),
      ...createButton(colors, "warning", "text-black"),
      ...createButton(colors, "info", "text-black"),
      ...createButton(colors, "dark", "text-white")
    },
    inner: {},
    label: {}
  }
}
