import { HexColor, RequiredColors } from "kagura-ui/contracts/tailwind";
import { colors, shadeColor } from "./color.js"
export const createButton = (color: keyof RequiredColors) => (
  {
    [`&-${color}`]: {
      [`@apply bg-${color} border-${color}`]: {},
      "&:hover": {
        [`--tw-kagura-bg-${color}`]: shadeColor(colors.background[color] as HexColor, 15),
        [`--tw-kagura-border-${color}`]: shadeColor(colors.background[color] as HexColor, 20),
      },
      "&:active": {
        transform: "translateY(1px)"
      }
    }
  })

export const button = {
  root: {
    "@apply px-[18px] text-left h-9 rounded font-semibold w-auto relative text-sm border-transparent inline-block": {},
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    transition: "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    ...createButton("primary"),
    ...createButton("secondary"),
    ...createButton("success"),
    ...createButton("danger"),
    ...createButton("warning"),
    ...createButton("info"),
    ...createButton("dark")
  },
  inner: {
    "@apply text-left text-white flex items-center justify-center h-full overflow-visible": {}
  },
  label: {
    "@apply whitespace-nowrap h-full flex items-center overflow-hidden": {}
  }
}
