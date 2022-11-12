import { Theme, Preset } from "../../contracts/tailwind"

export default (theme: Theme) => {
  const colors = theme<Preset["colors"]>("kagura.colors")
  const textColors = Object.entries(colors.text).map(([key, val]) => ([
    `--tw-kagura-text-${key}`, val
  ]))

  const bgColors = Object.entries(colors.text).map(([key, val]) => ([
    `--tw-kagura-bg-${key}`, val
  ]))
  const borderColors = Object.entries(colors.text).map(([key, val]) => ([
    `--tw-kagura-border-${key}`, val
  ]))
  return {
    ":root": {
      ...Object.fromEntries(textColors),
      ...Object.fromEntries(bgColors),
      ...Object.fromEntries(borderColors)
    }
  }
} 
