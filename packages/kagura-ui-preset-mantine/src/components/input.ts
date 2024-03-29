import { PresetInput, Callable, Size } from "@kagura-ui/core/contracts";
import { sizes } from "@kagura-ui/core/utils";

const createSize = (size: Size) => {
  const fontSize = {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  };
  const iconSize = {
    xs: 14,
    sm: 16,
    md: 18,
    lg: 22,
    xl: 24,
  };
  const height = {
    xs: 30,
    sm: 36,
    md: 42,
    lg: 50,
    xl: 60,
  };
  const padding = {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16.6667,
    xl: 20,
  };
  return {
    [size]: {
      ".input-input": {
        [`@apply text-[${fontSize[size]}px] min-h-[${height[size]}px] px-[${padding[size]}px]`]:
          {},
        fontSize:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      },
      ".input-icon, .input-right-section": {
        [`@apply w-[${height[size]}px]`]: {},
      },
      ".input-icon > *": {
        [`@apply h-[${iconSize[size]}px] w-[${iconSize[size]}px]`]: {},
      },
      "&[data-icon='true'] .input-input": {
        [`@apply pl-[${height[size]}px]`]: {},
      },
      "&[data-right-section='true'] .input-input": {
        [`@apply pr-[${height[size]}px]`]: {},
      },
    },
  };
};

const inputSizes = sizes.reduce(
  (collect, size) => ({ ...collect, ...createSize(size) }),
  {},
);

export const input: Callable<Partial<PresetInput>> = () => {
  return {
    root: {
      "@apply relative": {},
    },
    input: {
      "@apply leading-[1.55] appearance-none resize-none box-border text-[14px] w-full text-black block text-left min-h-[36px] px-3 rounded border border-[#ced4da] bg-white focus:outline-none focus:border-primary":
        {},
      "-webkit-tap-highlight-color": "transparent",
      transition: "border-color 100ms ease",
    },
    rightSection: {
      "@apply absolute top-0 bottom-0 right-0 justify-center items-center flex":
        {},
    },
    icon: {
      "@apply absolute top-0 bottom-0 left-0 justify-center items-center flex text-[#adb5bd]":
        {},
    },
    sizes: inputSizes,
    variants: {
      filled: {
        ".input-input": {
          "@apply border-transparent": {},
          backgroundColor: "rgb(241, 243, 245)",
        },
      },
    },
    disabled: {
      ".input-input": {
        "@apply bg-disabled cursor-not-allowed": {},
        color: "rgb(144, 146, 150)",
        opacity: "0.6",
      },
    },
    invalid: {
      ".input-input": {
        "@apply border-danger text-danger placeholder-danger": {},
      },
      ".input-icon": {
        "@apply text-danger": {},
      },
    },
  };
};
