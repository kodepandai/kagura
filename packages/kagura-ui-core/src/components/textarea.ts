import { PresetTextarea } from "../../contracts/input";
import { Preset, Size, Theme } from "../../contracts/tailwind";
import { sizes } from "../utils";
import { createInputStyle } from "./input";
import { createInputWrapperStyle } from "./inputWrapper";

const createSize = (size: Size, sizes?: PresetTextarea["sizes"]) => {
  return {
    // using :where here to maintain css specificity
    [`&:where([data-size="${size}"])`]: sizes?.[size] || {},
  };
};
export default (theme: Theme) => {
  let textareaStyles: any[] = [];

  Object.keys(theme("kagura")).map(scope => {
    let textarea = theme<Preset["components"]>(`kagura.${scope}.components`)?.textarea
    if (typeof textarea == "function") {
      textarea = textarea({ theme, preset: theme(`kagura.${scope}`) })
    }
    const textareaSizes = sizes.reduce(
      (collect, size) => ({ ...collect, ...createSize(size, (textarea as PresetTextarea)?.sizes) }),
      {}
    );

    const textareaWrapperStyle = createInputWrapperStyle(textarea?.wrapper, {
      description: textarea?.description,
      error: textarea?.error,
      label: textarea?.label,
      required: textarea?.required,
    })
    const textareaInputStyle = createInputStyle({
      input: textarea?.input,
      disabled: textarea?.disabled,
      icon: textarea?.icon,
      invalid: textarea?.invalid,
      sizes: textarea?.sizes,
      rightSection: textarea?.rightSection,
      root: textarea?.root,
      variants: textarea?.variants,
      withIcon: textarea?.withIcon,
    })

    const textareaStyle = {
      ".textarea": {
        ...textareaWrapperStyle,
        ...textareaInputStyle,
        ...textareaSizes,
      },
    }

    if (scope == "DEFAULT") {
      textareaStyles
        .push(textareaStyle)
    } else {
      textareaStyles
        .push({
          ["." + scope]: textareaStyle
        })
    }
  })

  return textareaStyles
}
