import { CSSRuleObject } from "tailwindcss/types/config"

type HexColor = `#${string}`
interface Colors {
  primary: HexColor
  secondary: HexColor
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
      primary: CSSRuleObject
      secondary: CSSRuleObject
      hover: CSSRuleObject
    }
  }
}

export interface Config {
  preset: () => Preset
}
