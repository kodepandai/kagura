import { Preset, PresetCreator } from "kagura-ui/contracts/tailwind";
import { createPreset } from "kagura-ui/utils";
import { button } from "./components/button.js";
import { colors } from "./components/color.js";
import { input } from "./components/input.js";

const mantinePreset: Partial<Preset> = {
  colors,
  components: {
    button,
    input
  },
};

export default createPreset(mantinePreset) as PresetCreator
