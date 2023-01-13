import { CSSRuleObject } from "tailwindcss/types/config";
import { PresetTextInput } from "./input";


export interface PresetSelect extends PresetTextInput {
  root: CSSRuleObject
  itemWrapper: CSSRuleObject;
  item: CSSRuleObject
}
