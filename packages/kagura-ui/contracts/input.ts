import { CSSRuleObject } from "tailwindcss/types/config";

export type InputVariant = "default" | "filled"
export interface PresetInput {
  root: CSSRuleObject;
  icon: CSSRuleObject;
  input: CSSRuleObject;
  rightSection: CSSRuleObject;
}
export interface PresetInputWrapper {
  root: CSSRuleObject;
  label: CSSRuleObject;
  description: CSSRuleObject;
  error: CSSRuleObject;
  required: CSSRuleObject;
}
