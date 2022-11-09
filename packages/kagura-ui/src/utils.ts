import { Colors } from "./contracts/tailwind"

const createColors = (colors: Colors, prefix: "bg" | "text" | "border") => {
  const entries = Object.keys(colors).map(key => ([key, `var(--tw-kagura-${prefix}-${key})`]))
  return Object.fromEntries(entries)
}
export { createColors }
