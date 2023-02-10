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

    const selectWrapperStyle = createInputWrapperStyle(select?.wrapper, {
      description: select?.description,
      error: select?.error,
      label: select?.label,
      required: select?.required,
    })
    const inputStyle = createInputStyle({
      input: select?.input,
      disabled: select?.disabled,
      icon: select?.icon,
      invalid: select?.invalid,
      sizes: select?.sizes,
      rightSection: select?.rightSection,
      root: select?.root,
      variants: select?.variants,
      withIcon: select?.withIcon,
    })

    const selectStyle = {
      ".select": {
        "&-item-wrapper": select?.itemWrapper,
        "&-item": select?.item,
        "&-right-section-icon": select?.rightSectionIcon,
        ...selectWrapperStyle,
        ...inputStyle,
        ...selectSizes,
      },
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
