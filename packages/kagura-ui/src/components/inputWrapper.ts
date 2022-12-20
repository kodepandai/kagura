import { Preset, Theme } from "../../contracts/tailwind";

export default (theme: Theme) => {
  let inputWrapperStyle: any[] = []
  Object.keys(theme("kagura")).map(scope => {
    let inputWrapper = theme<Preset["components"]>(`kagura.${scope}.components`)?.inputWrapper
    if (typeof inputWrapper == "function") {
      inputWrapper = inputWrapper({ theme, preset: theme(`kagura.${scope}`) })
    }
    if (scope == "DEFAULT") {
      inputWrapperStyle.push({
        ".input-wrapper": {
          ...inputWrapper?.root,
          "&-label": inputWrapper?.label,
          "&-required": inputWrapper?.required,
          "&-description": inputWrapper?.description,
          "&-error": inputWrapper?.error,
        }
      })
    } else {
      inputWrapperStyle.push({
        ["." + scope]: {
          ".input-wrapper": {
            ...inputWrapper?.root,
            "&-label": inputWrapper?.label,
            "&-required": inputWrapper?.required,
            "&-description": inputWrapper?.description,
            "&-error": inputWrapper?.error,
          }
        }
      })
    }
  })

  return inputWrapperStyle
}
