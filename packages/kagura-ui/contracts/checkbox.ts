import { CSSRuleObject } from "tailwindcss/types/config";
import { PresetInput } from "./input";
import { RequiredColors } from "./tailwind";

export interface PresetCheckbox extends Omit<PresetInput, 'rightSection' | 'withIcon' | 'invalid' | 'variants'> {
  wrapper: CSSRuleObject;
  labelWrapper: CSSRuleObject
  label: CSSRuleObject
  checked: CSSRuleObject;
  indeterminate: CSSRuleObject;
  defaultIcon: CSSRuleObject;
  colors: Partial<Record<keyof RequiredColors, CSSRuleObject>> & {
    [key: string]: CSSRuleObject;
  };
}
