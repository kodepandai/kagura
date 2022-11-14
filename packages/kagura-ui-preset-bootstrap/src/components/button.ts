import { RequiredColors } from "kagura-ui/contracts/tailwind";
import { colors, shadeColor, tintColor } from "./color.js"
const TINTABLE = ["warning", "info", "dark"]
const createButton = (color: keyof RequiredColors, className = "") => ({
  [`&-${color}`]: {
    [`@apply bg-${color} border-${color} ${className}`]: {},
    "&:hover": {
      [`--tw-kagura-bg-${color}`]: TINTABLE.includes(color) ? tintColor(colors.background[color], 15) : shadeColor(colors.background[color], 15),
      [`--tw-kagura-border-${color}`]: TINTABLE.includes(color) ? tintColor(colors.background[color], 10) : shadeColor(colors.background[color], 20),
    },
    "&:active": {
      [`--tw-kagura-bg-${color}`]: TINTABLE.includes(color) ? tintColor(colors.background[color], 20) : shadeColor(colors.background[color], 20),
      [`--tw-kagura-border-${color}`]: TINTABLE.includes(color) ? tintColor(colors.background[color], 10) : shadeColor(colors.background[color], 25),
    }
  }
})

export const button = {
  root: {
    "@apply inline-block font-normal text-center whitespace-nowrap align-middle select-none border border-transparent py-1.5 px-3 rounded text-base": {},
    transition: "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    ...createButton("primary", "text-white"),
    ...createButton("secondary", "text-white"),
    ...createButton("success", "text-white"),
    ...createButton("danger", "text-white"),
    ...createButton("warning", "text-black"),
    ...createButton("info", "text-black"),
    ...createButton("light", "text-black"),
    ...createButton("dark", "text-white")
  },
  inner: {},
  label: {}
}
