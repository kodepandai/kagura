import { PresetSelect } from "kagura-ui/contracts/select";
import { Callable } from "kagura-ui/contracts/tailwind";

export const select: Callable<Partial<PresetSelect>> = () => {
  return {
    itemWrapper: {
      "@apply border w-full p-1 rounded-sm shadow bg-white": {}
    },
    item: {
      "@apply p-2 rounded cursor-pointer": {},
      "&:hover, &[data-hovered='true']": {
        "@apply bg-gray-100": {}
      },
      "&[data-selected='true']": {
        "@apply bg-primary text-white": {}
      }
    }
  }
}
