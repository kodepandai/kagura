import { Colors, Preset } from "kagura-ui/contracts/tailwind";
import { rgbToHex } from "kagura-ui/utils"

let baseColors: Colors = {
  primary: "#228be6",
  secondary: rgbToHex(134, 142, 150),
  success: rgbToHex(18, 184, 134),
  danger: rgbToHex(250, 82, 82),
  warning: rgbToHex(250, 176, 5),
  info: rgbToHex(21, 170, 191),
  dark: rgbToHex(37, 38, 43),
  disabled: "#909296"
}

export const colors: Preset["colors"] = {
  base: baseColors,
  text: baseColors,
  background: baseColors,
  border: baseColors
}
