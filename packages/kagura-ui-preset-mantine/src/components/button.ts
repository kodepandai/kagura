import {
  Callable,
  HexColor,
  Preset,
  Size,
  PresetButton,
} from "@kagura-ui/core/contracts";
import { shadeColor, tintColor, sizes, hexToRgb } from "@kagura-ui/core/utils";
const createColor = (colors: Preset["colors"], color: string) => {
  return {
    [color]: {
      "--tw-kagura-button-base-color": `var(--tw-kagura-${color})`,
      "--tw-kagura-button-text-color": "#ffffff",
      "--tw-kagura-button-bg-color": `var(--tw-kagura-bg-${color}-rgb)`,
      "--tw-kagura-button-border-color": "transparent",
      "&:hover": {
        [`--tw-kagura-button-bg-color`]: hexToRgb(
          shadeColor(colors?.background?.[color] as HexColor, 15),
        ).join(" "),
        [`--tw-kagura-button-border-color`]: shadeColor(
          colors?.border?.[color] as HexColor,
          20,
        ),
        [`--tw-kagura-button-bg-outline-color`]: tintColor(
          colors?.background?.[color] as HexColor,
          90,
        ),
      },
    },
  };
};

const createSize = (size: Size) => {
  const paddingX = {
    xs: 14,
    sm: 18,
    md: 22,
    lg: 26,
    xl: 32,
  };
  const fontSizes = {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  };
  const heights = {
    xs: 30,
    sm: 36,
    md: 42,
    lg: 50,
    xl: 60,
  };
  return {
    [size]: {
      [`@apply px-[${paddingX[size]}px] text-[${fontSizes[size]}px] h-[${heights[size]}px]`]:
        {},
    },
  };
};

export const button: Callable<Partial<PresetButton>> = ({ preset }) => {
  const colors = preset.colors;
  const buttonColors = Object.keys(colors?.base || {}).reduce(
    (collect, key) => ({ ...collect, ...createColor(colors, key) }),
    {},
  );
  const buttonSizes = sizes.reduce(
    (collect, size) => ({ ...collect, ...createSize(size) }),
    {},
  );
  return {
    root: {
      "@apply px-[18px] text-left h-9 rounded font-semibold w-auto relative text-sm border inline-block":
        {},
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      transition:
        "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
      color: "var(--tw-kagura-button-text-color)",
      backgroundColor:
        "rgb(var(--tw-kagura-button-bg-color) / var(--tw-bg-opacity, 1))",
      borderColor: "var(--tw-kagura-button-border-color)",
      "&:active": {
        transform: "translateY(1px)",
      },
    },
    inner: {
      "@apply text-left flex items-center justify-center h-full overflow-visible":
        {},
    },
    label: {
      "@apply whitespace-nowrap h-full flex items-center overflow-hidden": {},
    },
    colors: buttonColors,
    sizes: buttonSizes,
    variants: {
      outline: {
        "--tw-kagura-button-text-color": "var(--tw-kagura-button-base-color)",
        "--tw-kagura-button-border-color": "var(--tw-kagura-button-base-color)",
        "--tw-kagura-button-bg-color": "transparent",
        "&:hover": {
          "--tw-kagura-button-bg-color":
            "var(--tw-kagura-button-bg-outline-color)",
        },
      },
    },
  };
};
