import { Preset, Theme } from "../../contracts/tailwind";

export default (theme: Theme) => {

  const button = theme<Preset["components"]["button"]>("kagura.components.button")
  return {
    ".button": {
      ...button.root,
      "&-inner": button.inner,
      "&-label": button.label
    }
  }
}
