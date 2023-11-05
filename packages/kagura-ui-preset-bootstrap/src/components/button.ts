import {
  Callable,
  HexColor,
  Preset,
  PresetContext,
  Size,
  ColorKeys,
  PresetButton,
} from "@kagura-ui/core/contracts";
import { shadeColor, tintColor, sizes } from "@kagura-ui/core/utils";
const TINTABLE = ["warning", "info", "dark"] as ColorKeys[];
const createColor = (colors: Preset["colors"], color: ColorKeys) => ({
  [color]: {
    "--tw-kagura-button-base-color": `var(--tw-kagura-${color})`,
    "--tw-kagura-button-text-color":
      TINTABLE.includes(color) && color != "dark" ? "#000" : "#fff",
    "--tw-kagura-button-bg-color": `var(--tw-kagura-bg-${color})`,
    "--tw-kagura-button-border-color": `var(--tw-kagura-border-${color})`,
    "&:hover": {
      [`--tw-kagura-button-bg-color`]: TINTABLE.includes(color)
        ? tintColor(colors?.background?.[color] as HexColor, 15)
        : shadeColor(colors?.background?.[color] as HexColor, 15),
      [`--tw-kagura-button-border-color`]: TINTABLE.includes(color)
        ? tintColor(colors?.background?.[color] as HexColor, 10)
        : shadeColor(colors?.background?.[color] as HexColor, 20),
      [`--tw-kagura-button-outline-text-color`]: tintColor(
        colors?.background?.[color] as HexColor,
        90,
      ),
    },
    "&:active": {
      [`--tw-kagura-button-bg-color`]: TINTABLE.includes(color)
        ? tintColor(colors?.background?.[color] as HexColor, 20)
        : shadeColor(colors?.background?.[color] as HexColor, 20),
      [`--tw-kagura-button-border-color`]: TINTABLE.includes(color)
        ? tintColor(colors?.background?.[color] as HexColor, 10)
        : shadeColor(colors?.background?.[color] as HexColor, 25),
    },
  },
});

const createSize = (size: Size) => {
  const paddingXY = {
    xs: [0.375, 0.125],
    sm: [0.5, 0.25],
    md: [0.75, 0.375],
    lg: [1, 0.5],
    xl: [1.125, 0.625],
  };
  const fontSizes = {
    xs: 0.75,
    sm: 0.875,
    md: 1,
    lg: 1.25,
    xl: 1.375,
  };
  const radius = {
    xs: 0.25,
    sm: 0.3,
    md: 0.375,
    lg: 0.5,
    xl: 0.625,
  };
  return {
    [size]: {
      [`@apply px-[${paddingXY[size][0]}rem] py-[${paddingXY[size][1]}rem] text-[${fontSizes[size]}rem] rounded-[${radius[size]}rem]`]:
        {},
    },
  };
};

export const button: Callable<Partial<PresetButton>> = ({
  preset,
}: PresetContext) => {
  const colors = preset.colors;
  const buttonColors = Object.keys(colors?.base || {}).reduce(
    (collect, key) => {
      return { ...collect, ...createColor(colors, key) };
    },
    {},
  );
  const buttonSizes = sizes.reduce(
    (collect, size) => ({ ...collect, ...createSize(size) }),
    {},
  );
  return {
    root: {
      "@apply inline-block font-normal text-center whitespace-nowrap align-middle select-none border":
        {},
      transition:
        "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
      backgroundColor: "var(--tw-kagura-button-bg-color)",
      borderColor: "var(--tw-kagura-button-border-color)",
      color: "var(--tw-kagura-button-text-color)",
    },
    sizes: buttonSizes,
    colors: buttonColors,
    variants: {
      outline: {
        "&:not(:hover)": {
          [`--tw-kagura-button-bg-color`]: "transparent",
          color: "var(--tw-kagura-button-base-color)",
        },
      },
    },
  };
};
