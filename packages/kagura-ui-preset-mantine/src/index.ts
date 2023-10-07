import { Preset, PresetCreator } from "@kagura-ui/core/contracts";
import { createPreset } from "@kagura-ui/core/utils";
import { colors } from "./base/color.js";
import { spacing } from "./base/spacing.js";
import { button } from "./components/button.js";
import { input } from "./components/input.js";
import { inputWrapper } from "./components/inputWrapper.js";
import { select } from "./components/select.js";
import { textarea } from "./components/textarea.js";
import { checkbox } from "./components/checkbox.js";

const preset: Partial<Preset> = {
  colors,
  spacing,
  components: {
    button,
    checkbox,
    input,
    inputWrapper,
    select,
    textarea,
  },
};

export const theme = createPreset(preset) as PresetCreator;
