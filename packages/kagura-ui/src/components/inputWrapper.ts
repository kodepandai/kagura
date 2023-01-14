import { PresetInputWrapper } from "../../contracts/input";
import { Preset, Size, Theme } from "../../contracts/tailwind";
import { sizes } from "../utils";

const createSize = (size: Size, sizes?: PresetInputWrapper["sizes"]) => {
  return {
    // using :where selector here to maintain css specificity
    [`&:where([data-size="${size}"])`]: sizes?.[size] || {},
  };
};

export const createInputWrapperStyle = (inputWrapper?: Partial<PresetInputWrapper>) => {

  const inputWrapperSizes = sizes.reduce(
    (collect, size) => ({ ...collect, ...createSize(size, inputWrapper?.sizes) }),
    {}
  );
  return {
    ".input-wrapper": {
      ...inputWrapper?.root,
      ...inputWrapperSizes,
      "&-label": inputWrapper?.label,
      "&-required": inputWrapper?.required,
      "&-description": inputWrapper?.description,
      "&-error": inputWrapper?.error,
    }
  }

}
export default (theme: Theme) => {
  let inputWrapperStyles: any[] = []
  Object.keys(theme("kagura")).map(scope => {
    let inputWrapper = theme<Preset["components"]>(`kagura.${scope}.components`)?.inputWrapper
    if (typeof inputWrapper == "function") {
      inputWrapper = inputWrapper({ theme, preset: theme(`kagura.${scope}`) })
    }
    const inputWrapperStyle = createInputWrapperStyle(inputWrapper)
    if (scope == "DEFAULT") {
      inputWrapperStyles
        .push(inputWrapperStyle)
    } else {
      inputWrapperStyles
        .push({
          ["." + scope]: inputWrapperStyle
        })
    }
  })

  return inputWrapperStyles
}
