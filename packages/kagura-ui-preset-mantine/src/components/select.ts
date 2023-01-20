import { PresetSelect } from "kagura-ui/contracts/select";
import { Callable, Size } from "kagura-ui/contracts/tailwind";
import { sizes } from "kagura-ui/utils";

const createSize = (size: Size) => {
  const fontSize = {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20
  }
  const paddingXY = {
    // in px
    xs: [10, 6.6667],
    sm: [12, 8],
    md: [16, 10.6667],
    lg: [20, 13.3333],
    xl: [24, 16]
  }
  return {
    [size]: {
      ".select-item": {
        [`@apply text-[${fontSize[size]}px] px-[${paddingXY[size][0]}px] py-[${paddingXY[size][1]}px]`]: {},
      },
    }
  }
}
const selectSizes = sizes.reduce(
  (collect, size) => ({ ...collect, ...createSize(size) }),
  {}
);
export const select: Callable<Partial<PresetSelect>> = () => {
  return {
    itemWrapper: {
      "@apply border w-full p-1 rounded-sm shadow bg-white": {},
    },
    item: {
      "@apply p-2 rounded cursor-pointer": {},
      fontSize: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      "&:hover, &[data-hovered='true']": {
        "@apply bg-gray-100": {}
      },
      "&[data-selected='true']": {
        "@apply bg-primary text-white": {}
      },
    },
    sizes: selectSizes
  }
}
