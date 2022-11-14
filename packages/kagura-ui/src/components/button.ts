import { Preset, Theme } from "../../contracts/tailwind";
import { createScope } from "../utils";

export default (theme: Theme) => {

  const button = theme<Preset["components"]["button"]>("kagura.components.button")
  const buttonStyle: any = {
    ".button": {
      ...button.root,
      "&-inner": button.inner,
      "&-label": button.label
    }
  }
  return createScope(buttonStyle, theme)
}
