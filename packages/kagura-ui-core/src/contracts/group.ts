import { CSSRuleObject } from "tailwindcss/types/config";
import { Spacing } from "./tailwind";

export interface PresetGroup {
  root: CSSRuleObject
  spacings: Partial<Spacing>
}
