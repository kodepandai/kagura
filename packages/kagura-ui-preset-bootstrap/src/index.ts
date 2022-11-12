import { Colors, Preset } from "kagura-ui/contracts/tailwind";
import { createButtonColor } from "./utils/button.js";
import { modifHex } from "./utils/color.js";

export default (): Preset => {
  let baseColors: Colors = {
    primary: "#007bff",
    secondary: "#6c757d"
  }
  const darker = (val: number) => [-val, -val, -val];
  baseColors = {
    ...baseColors,
    'hover-primary': modifHex(baseColors.primary, darker(15)),
    'hover-secondary': modifHex(baseColors.secondary, darker(15))
  }
  return {
    colors: {
      text: baseColors,
      background: baseColors,
      border: {
        ...baseColors,
        'hover-primary': modifHex(baseColors.primary, darker(20)),
        'hover-secondary': modifHex(baseColors.secondary, darker(20)),
      }
    },
    components: {
      button: {
        root: {
          "@apply inline-block font-normal text-center whitespace-nowrap align-middle select-none border border-transparent py-1.5 px-3 rounded text-base": {},
          transition: "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
          ...createButtonColor("primary", "text-white"),
          ...createButtonColor("secondary", "text-white")
        },
        inner: {},
        label: {}
      },
    },
  };
};
