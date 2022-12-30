import { CSSRuleObject } from "tailwindcss/types/config";
import { Size } from "./tailwind";

export type InputVariant = "default" | "filled"
type InputStatuses = "disabled" | "invalid" | "required"
export interface PresetInput {
  root: CSSRuleObject;
  icon: CSSRuleObject;
  input: CSSRuleObject;
  rightSection: CSSRuleObject;
  sizes: Partial<Record<Size, CSSRuleObject>>;
  variants: Partial<Record<InputVariant, CSSRuleObject>>;
  statuses: Partial<Record<InputStatuses, CSSRuleObject>>;
}
export interface PresetInputWrapper {
  root: CSSRuleObject;
  label: CSSRuleObject;
  description: CSSRuleObject;
  error: CSSRuleObject;
  required: CSSRuleObject;
}
