import { CSSRuleObject } from "tailwindcss/types/config";
import { InputStatus, InputVariant, PresetInput } from "../../contracts/input";
import { Preset, Size, Theme } from "../../contracts/tailwind";
import { sizes } from "../utils.js";


const createStatus = (status: InputStatus, statuses?: { invalid?: CSSRuleObject, disabled?: CSSRuleObject }) => {
  return {
    // using :where selector here to maintain css specificity
    [`&:where([data-${status}="true"])`]: statuses?.[status] || {},
  };
};
const createSize = (size: Size, sizes?: PresetInput["sizes"]) => {
  return {
    // using :where selector here to maintain css specificity
    [`&:where([data-size="${size}"])`]: sizes?.[size] || {},
  };
};
const createVariant = (variant: InputVariant, variants?: PresetInput["variants"]) => {
  return {
    // using :where selector here to maintain css specificity
    [`&:where([data-variant="${variant}"])`]: variants?.[variant] || {},
  };
};
export const createInputStyle = (input?: Partial<PresetInput>) => {

  const statuses: InputStatus[] = ['invalid', 'disabled']
  const variants: InputVariant[] = ['default', 'filled']
  const inputStatuses = statuses.reduce(
    (collect, status) => ({ ...collect, ...createStatus(status, { invalid: input?.invalid, disabled: input?.disabled }) }),
    {}
  );
  const inputSizes = sizes.reduce(
    (collect, size) => ({ ...collect, ...createSize(size, input?.sizes) }),
    {}
  );

  const inputVariants = variants.reduce(
    (collect, variant) => ({ ...collect, ...createVariant(variant, input?.variants) }),
    {}
  )

  return {
    ...input?.root,
    ...inputStatuses,
    ...inputSizes,
    ...inputVariants,
    "&-icon": input?.icon,
    "&-input": input?.input,
    "&-right-section": input?.rightSection
  }
}
export default (theme: Theme) => {
  let inputStyles: any[] = []
  Object.keys(theme("kagura")).map(scope => {
    let input = theme<Preset["components"]>(`kagura.${scope}.components`)?.input
    if (typeof input == "function") {
      input = input({ theme, preset: theme(`kagura.${scope}`) })
    }
    const inputStyle = { ".input": createInputStyle(input) }
    if (scope == "DEFAULT") {
      inputStyles.push(inputStyle)
    } else {
      inputStyles.push({
        ["." + scope]: inputStyle
      })
    }
  })

  return inputStyles
}
