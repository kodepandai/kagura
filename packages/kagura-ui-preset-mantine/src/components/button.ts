import { HexColor, RequiredColors } from "kagura-ui/contracts/tailwind";
import { colors, shadeColor, tintColor } from "./color.js"
const TINTABLE = ["warning", "info", "dark"]
export const createButton = (color: keyof RequiredColors, className = "") => (
  {
    [`&-${color}`]: {
      [`@apply bg-${color} border-${color} ${className}`]: {},
      "&:hover": {
        [`--tw-kagura-bg-${color}`]: TINTABLE.includes(color) ? tintColor(colors.background[color] as HexColor, 15) : shadeColor(colors.background[color] as HexColor, 15),
        [`--tw-kagura-border-${color}`]: TINTABLE.includes(color) ? tintColor(colors.background[color] as HexColor, 10) : shadeColor(colors.background[color] as HexColor, 20),
      },
      "&:active": {
        [`--tw-kagura-bg-${color}`]: TINTABLE.includes(color) ? tintColor(colors.background[color] as HexColor, 20) : shadeColor(colors.background[color] as HexColor, 20),
        [`--tw-kagura-border-${color}`]: TINTABLE.includes(color) ? tintColor(colors.background[color] as HexColor, 10) : shadeColor(colors.background[color] as HexColor, 25),
      }
    }
  })

export const button = {
  root: {
    "@apply px-[18px] text-left h-9 rounded font-semibold w-auto relative text-sm border-transparent": {},
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    transition: "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    ...createButton("primary", "text-white"),
    ...createButton("secondary", "text-white"),
    ...createButton("success", "text-white"),
    ...createButton("danger", "text-white"),
    ...createButton("warning", "text-white"),
    ...createButton("info", "text-white"),
    ...createButton("light", "text-black"),
    ...createButton("dark", "text-white")
  },
  inner: {},
  label: {}
}
