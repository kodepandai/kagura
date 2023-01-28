import { PresetCreator } from "kagura-ui/contracts/tailwind";
import { createPreset } from "kagura-ui/utils";
import { button } from "./components/button.js";
import { colors } from "./components/color.js";
import { input } from "./components/input.js";
import { inputWrapper } from "./components/inputWrapper.js";
import { select } from "./components/select.js";
import { textArea } from "./components/textArea.js";

const bootstrapPreset = {
  colors,
  components: {
    button,
    input,
    inputWrapper,
    select,
    textArea
  },
};
export default createPreset(bootstrapPreset) as PresetCreator
