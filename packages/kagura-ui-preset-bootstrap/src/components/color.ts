import { Colors, HexColor, Preset } from "kagura-ui/contracts/tailwind";
import { mixColor } from "kagura-ui/utils"

export const tintColor = (color: HexColor, weight: number) => mixColor("#ffffff", color, weight)
export const shadeColor = (color: HexColor, weight: number) => mixColor("#000000", color, weight)
let baseColors: Colors = {
  primary: "#0d6efd",
  secondary: "#6c757d",
  success: "#198754",
  danger: "#dc3545",
  warning: "#ffc107",
  info: "#0dcaf0",
  dark: "#212529"
}

export const colors: Preset["colors"] = {
  text: baseColors,
  background: baseColors,
  border: baseColors
}
