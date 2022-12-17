import { Preset, Theme } from "../../contracts/tailwind";

export default (theme: Theme) => {
  let inputStyle: any[] = []
  Object.keys(theme("kagura")).map(scope => {
    let input = theme<Preset["components"]>(`kagura.${scope}.components`)?.input
    if (typeof input == "function") {
      input = input({ theme, preset: theme(`kagura.${scope}`) })
    }
    if (scope == "DEFAULT") {
      inputStyle.push({
        ".input": {
          ...input?.root,
          "&-icon": input?.icon,
          "&-input": input?.input,
          "&-right-section": input?.rightSection
        }
      })
    } else {
      inputStyle.push({

        ["." + scope]: {
          ".input": {
            ...input?.root,
            "&-icon": input?.icon,
            "&-input": input?.input,
            "&-right-section": input?.rightSection
          }
        }
      })
    }
  })

  return inputStyle
}
