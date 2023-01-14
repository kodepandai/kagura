import { Preset, PresetCreator } from "kagura-ui/contracts/tailwind";
import { createPreset } from "kagura-ui/utils";
import { button } from "./components/button.js";
import { colors } from "./components/color.js";
import { input } from "./components/input.js";
import { inputWrapper } from "./components/inputWrapper.js";
import { select } from "./components/select.js";

const mantinePreset: Partial<Preset> = {
  colors,
  components: {
    button,
    input,
    inputWrapper,
    select
  },
};

export default createPreset(mantinePreset) as PresetCreator
