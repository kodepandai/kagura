import { Colors, HexColor, Preset } from "kagura-ui/contracts/tailwind";
import { mixColor, rgbToHex } from "kagura-ui/utils"

export const tintColor = (color: HexColor, weight: number) => mixColor("#ffffff", color, weight)
export const shadeColor = (color: HexColor, weight: number) => mixColor("#000000", color, weight)
let baseColors: Colors = {
  primary: "#228be6",
  secondary: rgbToHex(134, 142, 150),
  success: rgbToHex(18, 184, 134),
  danger: rgbToHex(250, 82, 82),
  warning: rgbToHex(250, 176, 5),
  info: rgbToHex(21, 170, 191),
  dark: rgbToHex(37, 38, 43)
}

export const colors: Preset["colors"] = {
  text: baseColors,
  background: baseColors,
  border: baseColors
}
