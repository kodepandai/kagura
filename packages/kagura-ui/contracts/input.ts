import { CSSRuleObject } from "tailwindcss/types/config";
import { Size } from "./tailwind";

export type InputVariant = "default" | "filled"
export type InputStatus = "disabled" | "invalid"
export interface PresetInput {
  root: CSSRuleObject;
  icon: CSSRuleObject;
  input: CSSRuleObject;
  rightSection: CSSRuleObject;
  disabled: CSSRuleObject
  invalid: CSSRuleObject
  withIcon: CSSRuleObject;
  sizes: Partial<Record<Size, CSSRuleObject>>;
  variants: Partial<Record<InputVariant, CSSRuleObject>>;
}
export interface PresetInputWrapper {
  root: CSSRuleObject;
  label: CSSRuleObject;
  description: CSSRuleObject;
  error: CSSRuleObject;
  required: CSSRuleObject;
  sizes: Partial<Record<Size, CSSRuleObject>>;
}

export interface PresetBaseInput extends PresetInput, PresetInputWrapper {
  wrapper: CSSRuleObject
}

export type PresetTextarea = PresetBaseInput
