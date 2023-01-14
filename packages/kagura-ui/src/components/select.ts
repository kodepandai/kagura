import { Preset, Theme } from "../../contracts/tailwind";
import { createInputStyle } from "./input";
import { createInputWrapperStyle } from "./inputWrapper";

export default (theme: Theme) => {
  let selectStyles: any[] = [];

  Object.keys(theme("kagura")).map(scope => {
    let select = theme<Preset["components"]>(`kagura.${scope}.components`)?.select
    if (typeof select == "function") {
      select = select({ theme, preset: theme(`kagura.${scope}`) })
    }

    const inputWrapperStyle = createInputWrapperStyle(select?.inputWrapper)
    const inputStyle = createInputStyle(select?.input)

    const selectStyle = {
      ".select": {
        ...select?.root,
        "&-item-wrapper": select?.itemWrapper,
        "&-item": select?.item,
        ...inputWrapperStyle,
        ...inputStyle
      }
    }

    if (scope == "DEFAULT") {
      selectStyles
        .push(selectStyle)
    } else {
      selectStyles
        .push({
          ["." + scope]: selectStyle
        })
    }
  })

  return selectStyles
}
