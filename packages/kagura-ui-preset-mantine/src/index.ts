import { Preset } from "kagura-ui/contracts/tailwind";
import { button } from "./components/button.js";
import { colors } from "./components/color.js";

export default (): Preset => {
  return {
    colors,
    components: {
      button
    },
  };
};
