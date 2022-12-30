import { InputStatus, InputVariant, PresetInput } from "../../contracts/input";
import { Preset, Size, Theme } from "../../contracts/tailwind";
import { sizes } from "../utils.js";


const createStatus = (statuses: PresetInput["statuses"], status: InputStatus) => {
  return {
    // using :where selector here to maintain css specificity
    [`&:where([data-${status}="true"])`]: statuses?.[status] || {},
  };
};
const createSize = (sizes: PresetInput["sizes"], size: Size) => {
  return {
    // using :where selector here to maintain css specificity
    [`&:where([data-size="${size}"])`]: sizes?.[size] || {},
  };
};
const createVariant = (variants: PresetInput["variants"], variant: InputVariant) => {
  return {
    // using :where selector here to maintain css specificity
    [`&:where([data-variant="${variant}"])`]: variants?.[variant] || {},
  };
};
export default (theme: Theme) => {
  let inputStyles: any[] = []
  const statuses: InputStatus[] = ['invalid', 'disabled', 'required']
  const variants: InputVariant[] = ['default', 'filled']
  Object.keys(theme("kagura")).map(scope => {
    let input = theme<Preset["components"]>(`kagura.${scope}.components`)?.input
    if (typeof input == "function") {
      input = input({ theme, preset: theme(`kagura.${scope}`) })
    }
    const inputStatuses = Object.keys(statuses).reduce(
      (collect, status) => ({ ...collect, ...createStatus((input as PresetInput).statuses, status as InputStatus) }),
      {}
    );
    const inputSizes = Object.keys(sizes).reduce(
      (collect, size) => ({ ...collect, ...createSize((input as PresetInput).sizes, size as Size) }),
      {}
    );

    const inputVariants = variants.reduce(
      (collect, variant) => ({ ...collect, ...createVariant((input as PresetInput).variants, variant) }),
      {}
    )

    const inputStyle = {
      ".input": {
        ...input?.root,
        ...inputStatuses,
        ...inputSizes,
        ...inputVariants,
        "&-icon": input?.icon,
        "&-input": input?.input,
        "&-right-section": input?.rightSection
      }
    }
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
