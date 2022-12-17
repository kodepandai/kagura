import { Callable, PresetInput } from "kagura-ui/contracts/tailwind";

export const input: Callable<Partial<PresetInput>> = (context) => {
  return {
    root: {
      "@apply relative": {}
    },
    input: {
      "@apply h-[36px] leading-[34px] appearance-none resize-none box-border text-[14px] w-full text-black block text-left min-h-[36px] px-3 rounded border border-[#ced4da] bg-white focus:outline-none focus:border-primary": {},
      "-webkit-tap-highlight-color": "transparent",
      transition: "border-color 100ms ease",
    }
  }
}
