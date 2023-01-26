import { PluginAPI } from "tailwindcss/types/config";
import { PresetButton } from "./button";
import { PresetInput, PresetInputWrapper, PresetTextArea } from "./input";
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

export interface PresetContext {
  theme: Theme;
  preset: Preset;
}
export type Callable<T> = T | ((context: PresetContext) => T);
export interface Components {
  button: Callable<Partial<PresetButton>>;
  input: Callable<Partial<PresetInput>>;
  inputWrapper: Callable<Partial<PresetInputWrapper>>;
  select: Callable<Partial<PresetSelect>>;
  textArea: Callable<Partial<PresetTextArea>>;
}
export interface PresetColor {
  base: Colors;
  text: Colors;
  background: Colors;
  border: Colors;
}
export type Preset = Partial<{
  colors: Partial<PresetColor>;
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
