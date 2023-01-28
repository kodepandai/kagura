import {
  Callable,
  Colors,
  Components,
  HexColor,
  Preset,
  PresetContext,
  PresetCreator,
  Size,
} from "../contracts/tailwind";
import merge from "lodash.merge";
import { PresetButton } from "../contracts/button";
import { PresetInput, PresetInputWrapper, PresetTextArea } from "../contracts/input";
import { PresetSelect } from "../contracts/select";
import { PresetGroup } from "../contracts/group";

const createComponent = <T>(defaultPreset: Preset, customPreset: Preset, component: keyof Components) => ({ theme, preset }: PresetContext) => {
  let defaultPresetComponent = defaultPreset.components?.[component] as unknown as Callable<Partial<T>>
  if (typeof defaultPresetComponent == "function") {
    defaultPresetComponent = defaultPresetComponent({ theme, preset });
  }
  let customPresetComponent = customPreset.components?.[component] as unknown as Callable<Partial<T>>
  if (typeof customPresetComponent == "function") {
    customPresetComponent = customPresetComponent({ theme, preset });
  }

  return merge(
    defaultPresetComponent,
    customPresetComponent
  ) as Partial<T>;
}
export const createPreset: PresetCreator =
  (defaultPreset) => (customPreset) => {
    return {
      colors: {
        base: {
          ...defaultPreset.colors?.base,
          ...customPreset.colors?.base,
        },
        text: {
          ...defaultPreset.colors?.text,
          ...customPreset.colors?.text,
        },
        background: {
          ...defaultPreset.colors?.background,
          ...customPreset.colors?.background,
        },
        border: {
          ...defaultPreset.colors?.border,
          ...customPreset.colors?.border,
        },
      },
      spacing: {
        ...defaultPreset.spacing,
        ...customPreset.spacing
      },
      components: {
        button: createComponent<PresetButton>(defaultPreset, customPreset, "button"),
        group: createComponent<PresetGroup>(defaultPreset, customPreset, "group"),
        input: createComponent<PresetInput>(defaultPreset, customPreset, "input"),
        inputWrapper: createComponent<PresetInputWrapper>(defaultPreset, customPreset, "inputWrapper"),
        select: createComponent<PresetSelect>(defaultPreset, customPreset, "select"),
        textArea: createComponent<PresetTextArea>(defaultPreset, customPreset, "textArea")
      },
    };
  };

export const createColors = (colors: Partial<Colors>, prefix: string, rgb = false) => {
  const entries = Object.keys(colors).map((key) => [
    key,
    rgb ? `rgb(var(--tw-kagura${prefix ? "-" + prefix : ""}-${key}-rgb) / var(--tw-bg-opacity, 1))` : `var(--tw-kagura${prefix ? "-" + prefix : ""}-${key})`,
  ]);
  return Object.fromEntries(entries);
};

export const hexToRgb = (hex: HexColor) => {
  let c: any;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return [(c >> 16) & 255, (c >> 8) & 255, c & 255];
  }
  throw new Error("Bad Hex");
};

export const rgbToHex = (r: number, g: number, b: number): HexColor => {
  return ("#" +
    ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)) as HexColor;
};

/*
 * Mix two color like sass mix
 */
export const mixColor = (
  color_1: HexColor,
  color_2: HexColor,
  weight: number = 50
) => {
  const color1Rgb = hexToRgb(color_1);
  const rgbMixed = hexToRgb(color_2).map((v2, i) => {
    let v = v2 + (color1Rgb[i] - v2) * (weight / 100.0);
    if (v < 0) return 0;
    if (v > 255) return 255;
    return v;
  });
  return rgbToHex(rgbMixed[0], rgbMixed[1], rgbMixed[2]);
};

export const tintColor = (color: HexColor, weight: number) =>
  mixColor("#ffffff", color, weight);
export const shadeColor = (color: HexColor, weight: number) =>
  mixColor("#000000", color, weight);
export const sizes: Size[] = ["xs", "sm", "md", "lg", "xl"];
