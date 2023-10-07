import { PresetCheckbox, ColorKeys, Preset, Size, Theme } from "../contracts";
import { sizes } from "../utils.js";

const createColor = (colors: PresetCheckbox["colors"], color: ColorKeys) => {
  return {
    // using :where selector here to maintain css specificity
    [`&:where([data-color="${color}"])`]: colors?.[color] || {},
  };
};

const createSize = (size: Size, sizes?: PresetCheckbox["sizes"]) => {
  return {
    // using :where selector here to maintain css specificity
    [`&:where([data-size="${size}"])`]: sizes?.[size] || {},
  };
};
export const createChekboxStyle = (
  preset: Preset,
  checkbox?: Partial<PresetCheckbox>,
) => {
  const checkboxSizes = sizes.reduce(
    (collect, size) => ({ ...collect, ...createSize(size, checkbox?.sizes) }),
    {},
  );
  const checkboxColors = Object.keys(preset?.colors?.base || {}).reduce(
    (collect, color) => ({
      ...collect,
      ...createColor((checkbox as PresetCheckbox).colors, color),
    }),
    {},
  );

  return {
    ...checkbox?.root,
    ...checkboxSizes,
    ...checkboxColors,
    "&-wrapper": checkbox?.wrapper,
    "&-icon": checkbox?.icon,
    "&-input": checkbox?.input,
    "&-default-icon": checkbox?.defaultIcon,
    "&-label-wrapper": checkbox?.labelWrapper,
    "&-label": checkbox?.label,
    '&:where([data-disabled="true"])': checkbox?.disabled,
    '&:where([data-checked="true"])': checkbox?.checked,
    '&:where([data-indeterminate="true"])': checkbox?.indeterminate,
  };
};

export default (theme: Theme) => {
  let checkboxStyles: any[] = [];
  Object.keys(theme("kagura")).map((scope) => {
    const preset = theme<Preset>(`kagura.${scope}`);
    let checkbox = preset.components?.checkbox;
    if (typeof checkbox == "function") {
      checkbox = checkbox({ theme, preset: theme(`kagura.${scope}`) });
    }
    const checkboxStyle = { ".checkbox": createChekboxStyle(preset, checkbox) };
    if (scope == "DEFAULT") {
      checkboxStyles.push(checkboxStyle);
    } else {
      checkboxStyles.push({
        ["." + scope]: checkboxStyle,
      });
    }
  });

  return checkboxStyles;
};
