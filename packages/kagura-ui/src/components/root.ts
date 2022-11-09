export default (theme) => {
  colors = theme("kagura.colors")
  textColors = Object.entries(colors.text).map(([key, val]) => ([
    `--tw-kagura-text-${key}`, val
  ]))

  bgColors = Object.entries(colors.text).map(([key, val]) => ([
    `--tw-kagura-bg-${key}`, val
  ]))
  borderColors = Object.entries(colors.text).map(([key, val]) => ([
    `--tw-kagura-border-${key}`, val
  ]))
  return {
    ...Object.fromEntries(textColors),
    ...Object.fromEntries(bgColors),
    ...Object.fromEntries(borderColors)
  }
} 
