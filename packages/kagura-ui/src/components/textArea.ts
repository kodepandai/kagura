import { InputStatus, InputVariant, PresetInput, PresetTextArea } from "../../contracts/input";
import { Preset, Size, Theme } from "../../contracts/tailwind";
import { sizes } from "../utils.js";


const createStatus = (status: InputStatus, statuses?: PresetInput["statuses"]) => {
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
export const createTextAreaStyle = (textArea?: Partial<PresetTextArea['textArea']>) => {

  const statuses: InputStatus[] = ['invalid', 'disabled', 'required']
  const variants: InputVariant[] = ['default', 'filled']
  const textAreaStatuses = statuses.reduce(
    (collect, status) => ({ ...collect, ...createStatus(status, textArea?.statuses) }),
    {}
  );
  const textAreaSizes = sizes.reduce(
    (collect, size) => ({ ...collect, ...createSize(size, textArea?.sizes) }),
    {}
  );

  const textAreaVariants = variants.reduce(
    (collect, variant) => ({ ...collect, ...createVariant(variant, textArea?.variants) }),
    {}
  )

  return {
    ".textarea": {
      ...textArea?.root,
      ...textAreaStatuses,
      ...textAreaSizes,
      ...textAreaVariants,
      "&-icon": textArea?.icon,
      "&-input": textArea?.input,
      "&-right-section": textArea?.rightSection
    }
  }
}
export default (theme: Theme) => {
  let textAreaStyles: any[] = []
  Object.keys(theme("kagura")).map(scope => {
    let textArea = theme<Preset["components"]>(`kagura.${scope}.components`)?.textArea
    if (typeof textArea == "function") {
      textArea = textArea({ theme, preset: theme(`kagura.${scope}`) })
    }
    const textAreaStyle = createTextAreaStyle(textArea?.textArea)
    if (scope == "DEFAULT") {
      textAreaStyles.push(textAreaStyle)
    } else {
      textAreaStyles.push({
        ["." + scope]: textAreaStyle
      })
    }
  })

  return textAreaStyles
}
