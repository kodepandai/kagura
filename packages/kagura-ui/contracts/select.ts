import { CSSRuleObject } from "tailwindcss/types/config";
import { PresetBaseInput } from "./input";

export interface PresetSelect extends PresetBaseInput {
  itemWrapper: CSSRuleObject;
  item: CSSRuleObject;
  itemHovered: CSSRuleObject;
  itemSelected: CSSRuleObject;
  rightSectionIcon: CSSRuleObject;
}
