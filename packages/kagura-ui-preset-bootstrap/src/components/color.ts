import { Colors, Preset } from "kagura-ui/contracts/tailwind";

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
  base: baseColors,
  text: baseColors,
  background: baseColors,
  border: baseColors
}
