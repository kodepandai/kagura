import { PresetCreator } from "kagura-ui/contracts/tailwind";
import { createPreset } from "kagura-ui/utils";
import { button } from "./components/button.js";
import { colors } from "./components/color.js";

const bootstrapPreset = {
  colors,
  components: {
    button
  },
};
export default createPreset(bootstrapPreset) as PresetCreator
