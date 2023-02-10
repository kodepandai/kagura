import { Preset, PresetCreator } from "kagura-ui/contracts/tailwind";
import { createPreset } from "kagura-ui/utils";
import { colors } from "./base/color.js";
import { spacing } from "./base/spacing.js";
import { button } from "./components/button.js";
import { input } from "./components/input.js";
import { inputWrapper } from "./components/inputWrapper.js";
import { select } from "./components/select.js";
import { textarea } from "./components/textarea.js";

const preset: Partial<Preset> = {
  colors,
  spacing,
  components: {
    button,
    input,
    inputWrapper,
    select,
    textarea
  },
};

export const theme = createPreset(preset) as PresetCreator
