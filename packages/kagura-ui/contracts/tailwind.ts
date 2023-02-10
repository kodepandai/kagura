import { PluginAPI } from "tailwindcss/types/config";
import { PresetButton } from "./button";
import { PresetGroup } from "./group";
import { PresetInput, PresetInputWrapper, PresetTextarea } from "./input";
import { PresetSelect } from "./select";

export type HexColor = `#${string}`;
export interface RequiredColors {
  primary: HexColor;
  secondary: HexColor;
  success: HexColor;
  danger: HexColor;
  warning: HexColor;
  info: HexColor;
  dark: HexColor;
  disabled: HexColor;
}
export interface Colors extends Partial<RequiredColors> {
  [key: string]: HexColor | undefined;
}
export type Spacing = Record<Size, string>

export interface PresetContext {
  theme: Theme;
  preset: Preset;
}
export type Callable<T> = T | ((context: PresetContext) => T);
export interface Components {
  button: Callable<Partial<PresetButton>>;
  group: Callable<Partial<PresetGroup>>;
  input: Callable<Partial<PresetInput>>;
  inputWrapper: Callable<Partial<PresetInputWrapper>>;
  select: Callable<Partial<PresetSelect>>;
  textarea: Callable<Partial<PresetTextarea>>;
}
export interface PresetColor {
  base: Colors;
  text: Colors;
  background: Colors;
  border: Colors;
}
export type Preset = Partial<{
  colors: Partial<PresetColor>;
  spacing: Partial<Spacing>;
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
