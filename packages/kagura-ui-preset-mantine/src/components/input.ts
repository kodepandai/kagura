import { Callable, PresetInput, Size } from "kagura-ui/contracts/tailwind";
import { sizes } from "kagura-ui/utils";

const createSize = (size: Size) => {
  const fontSize = {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20
  }
  const height = {
    xs: 30,
    sm: 36,
    md: 42,
    lg: 50,
    xl: 60
  }
  const lineHeight = {
    xs: 28,
    sm: 34,
    md: 40,
    lg: 48,
    xl: 58
  }
  const padding = {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16.6667,
    xl: 20
  }
  return {
    [`&-${size} .input-input`]: {
      [`@apply text-[${fontSize[size]}px] h-[${height[size]}px] min-h-[${height[size]}px] p-[${padding[size]}px] leading-[${lineHeight[size]}px]`]: {}
    }
  }
}
export const input: Callable<Partial<PresetInput>> = (context) => {
  const inputSizes = sizes.reduce(
    (collect, size) => ({ ...collect, ...createSize(size) }),
    {}
  );
  return {
    root: {
      "@apply relative": {},
      "&-filled .input-input": {
        "@apply border-transparent": {},
        backgroundColor: "rgb(241, 243, 245)"
      },
      ...inputSizes
    },
    input: {
      "@apply h-[36px] leading-[34px] appearance-none resize-none box-border text-[14px] w-full text-black block text-left min-h-[36px] px-3 rounded border border-[#ced4da] bg-white focus:outline-none focus:border-primary": {},
      "-webkit-tap-highlight-color": "transparent",
      transition: "border-color 100ms ease",
    }
  }
}
