import { PresetGroup, Preset, Size, Theme } from "../contracts";
import { sizes } from "../utils.js";

const createSpacing = (spacings: PresetGroup["spacings"], spacing: Size) => {
  return {
    // using :where selector here to maintain css specificity
    [`&:where([data-spacing="${spacing}"])`]: spacings?.[spacing] || {
      // here is default gap style
      [`@apply gap-[var(--tw-kagura-spacing-${spacing})]`]: {},
    },
  };
};
export default (theme: Theme) => {
  let groupStyles: any[] = [];
  Object.keys(theme("kagura")).map((scope) => {
    const preset = theme<Preset>(`kagura.${scope}`);
    let group = preset.components?.group;
    if (typeof group == "function") {
      group = group({ theme, preset: theme(`kagura.${scope}`) });
    }
    const groupSpacings = sizes.reduce(
      (collect, size) => ({
        ...collect,
        ...createSpacing((group as PresetGroup).spacings, size),
      }),
      {},
    );

    const groupStyle = {
      ".group": {
        "@apply flex": {}, // group should be flex display
        ...group?.root,
        // handle flex grow for each group item
        "&:where([data-grow='true']) > *": {
          "@apply flex-grow": {},
        },
        ...groupSpacings,
      },
    };
    if (scope == "DEFAULT") {
      groupStyles.push(groupStyle);
    } else {
      groupStyles.push({
        ["." + scope]: groupStyle,
      });
    }
  });
  return groupStyles;
};
