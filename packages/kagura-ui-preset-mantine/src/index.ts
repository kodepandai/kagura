import { PresetCreator } from "kagura-ui/contracts/tailwind";
import { createPreset } from "kagura-ui/utils";
import { button } from "./components/button.js";
import { colors } from "./components/color.js";

const mantinePreset = {
  colors,
  components: {
    button
  },
};

export default createPreset(mantinePreset) as PresetCreator
