import { PresetTextarea } from "kagura-ui/contracts/input";
import { Callable, Size } from "kagura-ui/contracts/tailwind";
import { sizes } from "kagura-ui/utils";

const createSize = (size: Size) => {
  const padding = {
    xs: 4,
    sm: 6,
    md: 8,
    lg: 10,
    xl: 13
  }
  return {
    [size]: {
      // this is to correct text position inside textarea
      ".textarea-input": {
        [`@apply py-[${padding[size]}px]`]: {},
      },
    }
  }
}

const inputSizes = sizes.reduce(
  (collect, size) => ({ ...collect, ...createSize(size) }),
  {}
);

export const textarea: Callable<Partial<PresetTextarea>> = () => {
  return {
    sizes: inputSizes,
  }
}
