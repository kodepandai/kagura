import { CSSRuleObject } from "tailwindcss/types/config";
import { RequiredColors, Size } from "./tailwind"

export type ButtonVariant = 'filled' | 'outline'
export interface PresetButton {
  root: CSSRuleObject;
  inner: CSSRuleObject;
  label: CSSRuleObject;
  sizes: Partial<Record<Size, CSSRuleObject>>;
  colors: Partial<Record<keyof RequiredColors, CSSRuleObject>> & {
    [key: string]: CSSRuleObject;
  };
  variants: Partial<Record<ButtonVariant, CSSRuleObject>>;
}
