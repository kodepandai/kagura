import { createPreset } from "@kagura-ui/core/utils";
import { button } from "./components/button.js";
import { colors } from "./base/color.js";
import { spacing } from "./base/spacing.js";
import { input } from "./components/input.js";
import { inputWrapper } from "./components/inputWrapper.js";
import { select } from "./components/select.js";
import { PresetCreator } from "@kagura-ui/core/contracts";

const preset = {
  colors,
  spacing,
  components: {
    button,
    input,
    inputWrapper,
    select,
  },
};
export const theme = createPreset(preset) as PresetCreator;
