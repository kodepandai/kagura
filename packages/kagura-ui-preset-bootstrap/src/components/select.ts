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
      "@apply border w-full py-2 rounded shadow bg-white": {},
    },
    item: {
      "@apply px-2 py-1 cursor-pointer": {},
      "&:hover, &[data-hovered='true']": {
        "@apply bg-disabled": {}
      },
      "&[data-selected='true']": {
        "@apply bg-primary text-white": {}
      },
    },
    rightSection: {
      "@apply bg-no-repeat w-full h-full": {},
      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e")`,
      backgroundPosition: "right 0.75rem center",
      backgroundSize: "16px 12px",
    },
    sizes: selectSizes,
    input: {
      rightSection: {
        "&:has(.select-right-section)": {
          "@apply pointer-events-none": {}
        }
      }
    }
  }
}
