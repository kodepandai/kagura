import { PresetInput } from "kagura-ui/contracts/input";
import { Callable, Size } from "kagura-ui/contracts/tailwind";
import { sizes } from "kagura-ui/utils";

const createSize = (size: Size) => {
  const fontSize = {
    // in rem
    xs: 0.75,
    sm: 0.875,
    md: 1,
    lg: 1.25,
    xl: 1.375,
  }
  const paddingXY = {
    // in rem
    xs: [0.375, 0.25],
    sm: [0.5, 0.25],
    md: [0.75, 0.375],
    lg: [1, 0.5],
    xl: [1.125, 0.675],
  }
  return {
    [size]: {
      ".input-input": {
        [`@apply text-[${fontSize[size]}rem] px-[${paddingXY[size][0]}rem] py-[${paddingXY[size][1]}rem]`]: {},
        minHeight: `calc(1.5rem + ${paddingXY[size][0]}rem + 2px)`,
        borderRadius: `${paddingXY[size][1]}rem`
      }
    }
  }
}
export const input: Callable<Partial<PresetInput>> = () => {
  const inputSizes = sizes.reduce(
    (collect, size) => ({ ...collect, ...createSize(size) }),
    {}
  );
  return {
    root: {
      "@apply relative": {},
    },
    input: {
      "@apply block w-full font-normal leading-normal text-dark bg-white bg-clip-padding border border-[#ced4da] appearance-none rounded-md": {},
      transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
      "&:focus": {
        borderColor: "#86b7fe",
        outline: "0",
        boxShadow: "0 0 0 .25rem rgba(13,110,253,.25)"
      }
    },
    sizes: inputSizes,
    variants: {
      filled: {
        ".input-input": {
          "@apply border-transparent": {},
          backgroundColor: "rgb(241, 243, 245)"
        }
      },
    },
    statuses: {
      disabled: {
        ".input-input": {
          backgroundColor: "#e9ecef",
        }
      },
      invalid: {
        ".input-input": {
          "@apply border-danger text-danger placeholder-danger": {}
        }
      },
    }
  }
}
