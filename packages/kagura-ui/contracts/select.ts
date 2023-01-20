import { CSSRuleObject } from "tailwindcss/types/config";
import { PresetTextInput } from "./input";
import { Size } from "./tailwind";

export interface PresetSelect extends PresetTextInput {
  root: CSSRuleObject
  itemWrapper: CSSRuleObject;
  item: CSSRuleObject
  sizes: Partial<Record<Size, CSSRuleObject>>;
}
