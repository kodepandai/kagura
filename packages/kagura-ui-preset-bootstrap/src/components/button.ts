import { HexColor, Preset, PresetContext } from "kagura-ui/contracts/tailwind";
import { ButtonColor } from "kagura-ui/contracts/button";
import { shadeColor, tintColor } from "kagura-ui/utils"
const TINTABLE = ["warning", "info", "dark"] as ButtonColor[]
const createColor = (colors: Preset["colors"], color: ButtonColor, className = "") => ({
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
  const buttonColors = Object.keys(colors?.base || {})
    .reduce((collect, key) => {
      const className = TINTABLE.includes(key) && key != "dark" ? "text-black" : "text-white"
      return { ...collect, ...createColor(colors, key, className) }
    }, {})
  return {
    root: {
      "@apply inline-block font-normal text-center whitespace-nowrap align-middle select-none border border-transparent py-1.5 px-3 rounded text-base": {},
      transition: "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
      ...buttonColors
    },
    inner: {},
    label: {}
  }
}
