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
  const rightIconSize = {
    xs: 14,
    sm: 18,
    md: 20,
    lg: 24,
    xl: 28
  }
  return {
    [size]: {
      ".select-item": {
        [`@apply text-[${fontSize[size]}px] px-[${paddingXY[size][0]}px] py-[${paddingXY[size][1]}px]`]: {},
      },
      ".select-right-section-icon": {
        backgroundSize: `${rightIconSize[size]}px`,
      }
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
    rightSectionIcon: {
      "@apply bg-no-repeat w-full h-full pointer-events-none bg-center": {},
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='28' height='28' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' data-chevron='true' style='color: rgb(134, 142, 150);'%3E%3Cpath d='M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z' fill='currentColor' fill-rule='evenodd' clip-rule='evenodd'%3E%3C/path%3E%3C/svg%3E")`,
      // backgroundPosition: "right 0.75rem center",
    },
    rightSection: {
      "&:has(.select-right-section-icon)": {
        "@apply pointer-events-none": {}
      }
    },
    sizes: selectSizes,
  }
}
