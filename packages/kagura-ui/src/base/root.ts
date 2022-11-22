import { Theme, Preset } from "../../contracts/tailwind"

export default (theme: Theme) => {

  return Object.keys(theme("kagura")).map(scope => {

    const colors = theme<Preset["colors"]>(`kagura.${scope}.colors`)
    const prefix = '--tw-kagura'
    const baseColors = Object.entries(colors.base).map(([key, val]) => ([
      `${prefix}-${key}`, val
    ]))
    const textColors = Object.entries({ ...colors.base, ...colors.text }).map(([key, val]) => ([
      `${prefix}-text-${key}`, val
    ]))
    const bgColors = Object.entries({ ...colors.base, ...colors.background }).map(([key, val]) => ([
      `${prefix}-bg-${key}`, val
    ]))
    const borderColors = Object.entries({ ...colors.base, ...colors.border }).map(([key, val]) => ([
      `${prefix}-border-${key}`, val
    ]))
    return {
      [scope == 'DEFAULT' ? ':root' : '.' + scope]: {
        ...Object.fromEntries(baseColors),
        ...Object.fromEntries(textColors),
        ...Object.fromEntries(bgColors),
        ...Object.fromEntries(borderColors)
      }
    }
  })

} 
