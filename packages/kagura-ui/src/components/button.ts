import { Preset, Theme } from "../../contracts/tailwind";

export default (theme: Theme) => {
  let buttonStyle: any[] = []
  Object.keys(theme("kagura")).map(scope => {
    let button = theme<Preset["components"]>(`kagura.${scope}.components`)?.button
    if (typeof button == "function") {
      button = button({ theme, preset: theme(`kagura.${scope}`) })
    }
    if (scope == "DEFAULT") {
      buttonStyle.push({
        ".button": {
          ...button?.root,
          "&-inner": button?.inner,
          "&-label": button?.label
        }
      })
    } else {
      buttonStyle.push({

        ["." + scope]: {
          ".button": {
            ...button?.root,
            "&-inner": button?.inner,
            "&-label": button?.label
          }
        }
      })
    }
  })
  return buttonStyle
}
