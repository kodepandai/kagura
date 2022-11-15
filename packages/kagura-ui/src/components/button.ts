import { Preset, Theme } from "../../contracts/tailwind";

export default (theme: Theme) => {
  let buttonStyle: any[] = []
  Object.keys(theme("kagura")).map(scope => {
    const button = theme<Preset["components"]["button"]>(`kagura.${scope}.components.button`)
    if (scope == "DEFAULT") {
      buttonStyle.push({
        ".button": {
          ...button.root,
          "&-inner": button.inner,
          "&-label": button.label
        }
      })
    } else {
      buttonStyle.push({

        ["." + scope]: {
          ".button": {
            ...button.root,
            "&-inner": button.inner,
            "&-label": button.label
          }
        }
      })
    }
  })
  return buttonStyle
}
