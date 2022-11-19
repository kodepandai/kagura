import { CSSRuleObject, PluginAPI } from "tailwindcss/types/config"

export type HexColor = `#${string}`
export interface RequiredColors {
  primary: HexColor
  secondary: HexColor
  success: HexColor
  danger: HexColor
  warning: HexColor
  info: HexColor
  light: HexColor
  dark: HexColor
}
export interface Colors extends Partial<RequiredColors> {
  [key: string]: HexColor | undefined
}
export interface Preset {
  colors: {
    text: Colors
    background: Colors
    border: Colors
  },
  components: {
    button: {
      root: CSSRuleObject
      inner: CSSRuleObject
      label: CSSRuleObject
    }
  }
}

export type PresetCreator = (customPreset: Partial<Preset>) => Preset

export interface Config {
  preset: Preset
  scope?: string,
}

export type Theme = PluginAPI["theme"]
