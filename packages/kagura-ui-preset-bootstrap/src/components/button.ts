import { HexColor, Preset, PresetContext } from "kagura-ui/contracts/tailwind";
import { ButtonColor } from "kagura-ui/contracts/button";
import { shadeColor, tintColor } from "kagura-ui/utils"
const TINTABLE = ["warning", "info", "dark"] as ButtonColor[]
const createColor = (colors: Preset["colors"], color: ButtonColor) => ({
  [`&-${color}`]: {
    "--tw-kagura-button-base-color": `var(--tw-kagura-${color})`,
    "--tw-kagura-button-text-color": TINTABLE.includes(color) && color != "dark" ? "#000" : "#fff",
    "--tw-kagura-button-bg-color": `var(--tw-kagura-bg-${color})`,
    "--tw-kagura-button-border-color": `var(--tw-kagura-border-${color})`,
    "&:hover": {
      [`--tw-kagura-button-bg-color`]: TINTABLE.includes(color) ? tintColor(colors?.background?.[color] as HexColor, 15) : shadeColor(colors?.background?.[color] as HexColor, 15),
      [`--tw-kagura-button-border-color`]: TINTABLE.includes(color) ? tintColor(colors?.background?.[color] as HexColor, 10) : shadeColor(colors?.background?.[color] as HexColor, 20),
      [`--tw-kagura-button-outline-text-color`]: tintColor(colors?.background?.[color] as HexColor, 90)
    },
    "&:active": {
      [`--tw-kagura-button-bg-color`]: TINTABLE.includes(color) ? tintColor(colors?.background?.[color] as HexColor, 20) : shadeColor(colors?.background?.[color] as HexColor, 20),
      [`--tw-kagura-button-border-color`]: TINTABLE.includes(color) ? tintColor(colors?.background?.[color] as HexColor, 10) : shadeColor(colors?.background?.[color] as HexColor, 25),
    }
  }
})

export const button = ({ preset }: PresetContext) => {
  const colors = preset.colors
  const buttonColors = Object.keys(colors?.base || {})
    .reduce((collect, key) => {
      return { ...collect, ...createColor(colors, key) }
    }, {})
  return {
    root: {
      "@apply inline-block font-normal text-center whitespace-nowrap align-middle select-none border py-1.5 px-3 rounded text-base": {},
      transition: "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
      ...buttonColors,
      backgroundColor: "var(--tw-kagura-button-bg-color)",
      borderColor: "var(--tw-kagura-button-border-color)",
      color: "var(--tw-kagura-button-text-color)",
      "&-outline:not(:hover)": {
        [`--tw-kagura-button-bg-color`]: "transparent",
        color: "var(--tw-kagura-button-base-color)",
      }
    },
    inner: {},
    label: {}
  }
}
