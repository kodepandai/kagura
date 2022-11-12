import { Colors, HexColor } from "../contracts/tailwind"

export const createColors = (colors: Colors, prefix: "bg" | "text" | "border") => {
  const entries = Object.keys(colors).map(key => ([key, `var(--tw-kagura-${prefix}-${key})`]))
  return Object.fromEntries(entries)
}

export const hexToRgb = (hex: HexColor) => {
  let c: any;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return [(c >> 16) & 255, (c >> 8) & 255, c & 255]
  }
  throw new Error('Bad Hex');
}

export const rgbToHex = (r: number, g: number, b: number): HexColor => {
  return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1) as HexColor
}
