import { PresetSelect } from "../../contracts/select";
import { Preset, Size, Theme } from "../../contracts/tailwind";
import { sizes } from "../utils";
import { createInputStyle } from "./input";
import { createInputWrapperStyle } from "./inputWrapper";

const createSize = (size: Size, sizes?: PresetSelect["sizes"]) => {
  return {
    // using :where selector here to maintain css specificity
    [`&:where([data-size="${size}"])`]: sizes?.[size] || {},
  };
};
export default (theme: Theme) => {
  let selectStyles: any[] = [];

  Object.keys(theme("kagura")).map(scope => {
    let select = theme<Preset["components"]>(`kagura.${scope}.components`)?.select
    if (typeof select == "function") {
      select = select({ theme, preset: theme(`kagura.${scope}`) })
    }
    const selectSizes = sizes.reduce(
      (collect, size) => ({ ...collect, ...createSize(size, (select as PresetSelect)?.sizes) }),
      {}
    );

    const inputWrapperStyle = createInputWrapperStyle(select?.inputWrapper)
    const inputStyle = createInputStyle(select?.input)

    const selectStyle = {
      ".select": {
        ...select?.root,
        "&-item-wrapper": select?.itemWrapper,
        "&-item": select?.item,
        ...inputWrapperStyle,
        ...inputStyle,
        ...selectSizes
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
