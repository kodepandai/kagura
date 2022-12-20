import { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";

export type HexColor = `#${string}`;
export interface RequiredColors {
  primary: HexColor;
  secondary: HexColor;
  success: HexColor;
  danger: HexColor;
  warning: HexColor;
  info: HexColor;
  dark: HexColor;
}
export interface Colors extends Partial<RequiredColors> {
  [key: string]: HexColor | undefined;
}

export interface PresetContext {
  theme: Theme;
  preset: Preset;
}
export type Callable<T> = T | ((context: PresetContext) => T);
export interface PresetButton {
  root: CSSRuleObject;
  inner: CSSRuleObject;
  label: CSSRuleObject;
}
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
export interface Components {
  button: Callable<Partial<PresetButton>>;
  input: Callable<Partial<PresetInput>>;
  inputWrapper: Callable<Partial<PresetInputWrapper>>;
}
export type Preset = Partial<{
  colors: Partial<{
    base: Colors;
    text: Colors;
    background: Colors;
    border: Colors;
  }>;
  components: Partial<Components>;
}>;

export type PresetCreator = (
  defaultPreset: Preset
) => (customPreset: Preset) => Preset;

export interface Config {
  preset: Preset;
  scope?: string;
}
export type Theme = PluginAPI["theme"];
export type Size = "xs" | "sm" | "md" | "lg" | "xl";
