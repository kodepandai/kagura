import { CSSRuleObject } from "tailwindcss/types/config";
import { PresetInputWrapper, Preset, Size, Theme } from "../contracts";
import { sizes } from "../utils";

const createSize = (size: Size, sizes?: PresetInputWrapper["sizes"]) => {
  return {
    // using :where selector here to maintain css specificity
    [`&:where([data-size="${size}"])`]: sizes?.[size] || {},
  };
};

export const createInputWrapperStyle = (
  wrapperRootClass?: CSSRuleObject,
  inputWrapper?: Partial<Omit<PresetInputWrapper, "root">>,
) => {
  const inputWrapperSizes = sizes.reduce(
    (collect, size) => ({
      ...collect,
      ...createSize(size, inputWrapper?.sizes),
    }),
    {},
  );
  return {
    ...wrapperRootClass,
    ...inputWrapperSizes,
    "&-label": inputWrapper?.label,
    "&-required": inputWrapper?.required,
    "&-description": inputWrapper?.description,
    "&-error": inputWrapper?.error,
  };
};
export default (theme: Theme) => {
  let inputWrapperStyles: any[] = [];
  Object.keys(theme("kagura")).map((scope) => {
    let inputWrapper = theme<Preset["components"]>(`kagura.${scope}.components`)
      ?.inputWrapper;
    if (typeof inputWrapper == "function") {
      inputWrapper = inputWrapper({ theme, preset: theme(`kagura.${scope}`) });
    }
    const inputWrapperStyle = {
      ".input-wrapper": createInputWrapperStyle(
        inputWrapper?.root,
        inputWrapper,
      ),
    };
    if (scope == "DEFAULT") {
      inputWrapperStyles.push(inputWrapperStyle);
    } else {
      inputWrapperStyles.push({
        ["." + scope]: inputWrapperStyle,
      });
    }
  });

  return inputWrapperStyles;
};
