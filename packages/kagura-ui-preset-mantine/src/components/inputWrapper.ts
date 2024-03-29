import { PresetInputWrapper, Callable, Size } from "@kagura-ui/core/contracts";
import { sizes } from "@kagura-ui/core/utils";

const createSize = (size: Size) => {
  const fontSize = {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  };
  return {
    [size]: {
      ".input-wrapper-label": {
        [`@apply text-[${fontSize[size]}px]`]: {},
      },
      ".input-wrapper-description, .input-wrapper-error": {
        [`@apply text-[${fontSize[size] - 2}px]`]: {},
      },
    },
  };
};
export const inputWrapper: Callable<Partial<PresetInputWrapper>> = () => {
  const inputSizes = sizes.reduce(
    (collect, size) => ({ ...collect, ...createSize(size) }),
    {},
  );
  return {
    root: {
      fontFamily:
        "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
      lineHeight: "1.55",
      "& .input-wrapper-description+:where(.input,.textarea), & .input-wrapper-error+:where(.input,.textarea)":
      {
        "@apply mt-[5px]": {},
      },
      "& :where(.input,.textarea)+.input-wrapper-description, & :where(.input,.textarea)+.input-wrapper-error":
      {
        "@apply mt-[5px]": {},
      },
    },
    required: {
      "@apply text-danger": {},
    },
    label: {
      "@apply inline-block break-words cursor-default font-medium": {},
    },
    description: {
      "@apply break-words leading-[1.2] block": {},
      color: "rgb(134, 142, 150)",
    },
    error: {
      "@apply text-danger leading-[1.2] block break-words": {},
    },
    sizes: inputSizes,
  };
};
