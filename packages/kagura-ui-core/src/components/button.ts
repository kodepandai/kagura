import { ButtonVariant, PresetButton } from "../../contracts/button";
import { ColorKeys, Preset, Size, Theme } from "../../contracts/tailwind";
import { sizes } from "../utils.js";


const createColor = (colors: PresetButton["colors"], color: ColorKeys) => {
  return {
    // using :where selector here to maintain css specificity
    [`&:where([data-color="${color}"])`]: colors?.[color] || {},
  };
};
const createSize = (sizes: PresetButton["sizes"], size: Size) => {
  return {
    // using :where selector here to maintain css specificity
    [`&:where([data-size="${size}"])`]: sizes?.[size] || {},
  };
};
const createVariant = (variants: PresetButton["variants"], variant: ButtonVariant) => {
  return {
    // using :where selector here to maintain css specificity
    [`&:where([data-variant="${variant}"])`]: variants?.[variant] || {},
  };
};
export default (theme: Theme) => {
  let buttonStyles: any[] = []
  Object.keys(theme("kagura")).map(scope => {
    const preset = theme<Preset>(`kagura.${scope}`);
    let button = preset.components?.button;
    if (typeof button == "function") {
      button = button({ theme, preset: theme(`kagura.${scope}`) })
    }
    const colors = preset.colors;
    const buttonColors = Object.keys(colors?.base || {}).reduce(
      (collect, color) => ({ ...collect, ...createColor((button as PresetButton).colors, color) }),
      {}
    );
    const buttonSizes = sizes.reduce(
      (collect, size) => ({ ...collect, ...createSize((button as PresetButton).sizes, size) }),
      {}
    );

    const buttonVariants = (['filled', 'outline'] as ButtonVariant[]).reduce(
      (collect, variant) => ({ ...collect, ...createVariant((button as PresetButton).variants, variant) }),
      {}
    )

    const buttonStyle = {
      ".button": {
        ...button?.root,
        ...buttonColors,
        ...buttonSizes,
        ...buttonVariants,
        "&-inner": button?.inner,
        "&-label": button?.label
      }
    }
    if (scope == "DEFAULT") {
      buttonStyles.push(buttonStyle)
    } else {
      buttonStyles.push({
        ["." + scope]: buttonStyle
      })
    }
  })
  return buttonStyles
}
