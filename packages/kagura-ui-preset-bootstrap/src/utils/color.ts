import { HexColor } from "kagura-ui/contracts/tailwind";
import { hexToRgb, rgbToHex } from "kagura-ui/utils"

export const modifHex = (hex: HexColor, colorDisplacement = [0, 0, 0]): HexColor => {
  let [r, g, b] = hexToRgb(hex);
  const [dr, dg, db] = colorDisplacement
  r += dr
  g += dg
  b += db
  const [newR, newG, newB] = [r, g, b].map(val => {
    if (val < 0) return 0;
    if (val > 255) return 255;
    return val
  })
  return rgbToHex(newR, newG, newB)
}
