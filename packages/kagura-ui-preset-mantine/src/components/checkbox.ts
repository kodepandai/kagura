import { PresetCheckbox } from "kagura-ui/contracts/checkbox";
import { Callable, ColorKeys, Size } from "kagura-ui/contracts/tailwind";
import { sizes } from "kagura-ui/utils";

const createColor = (color: ColorKeys) => {
  return {
    [color]: {
      "--tw-kagura-checkbox-color": `var(--tw-kagura-bg-${color})`,
    },
  };
};

const createSize = (size: Size) => {
  const fontSize = {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20
  }
  const iconSize = {
    xs: 8,
    sm: 10,
    md: 14,
    lg: 16,
    xl: 20
  }
  const height = {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 30,
    xl: 36
  }
  return {
    [size]: {
      ".checkbox-label": {
        [`@apply text-[${fontSize[size]}px] leading-[${height[size]}px]`]: {}
      },
      ".checkbox-input": {
        [`@apply w-[${height[size]}px] h-[${height[size]}px]`]: {}
      },
      ".checkbox-icon": {
        [`@apply w-[${iconSize[size]}px]`]: {}
      }
    }
  }
}

const checkboxSizes = sizes.reduce(
  (collect, size) => ({ ...collect, ...createSize(size) }),
  {}
);

export const checkbox: Callable<Partial<PresetCheckbox>> = ({ preset }) => {
  const checkboxColors = Object.keys(preset.colors?.base || {}).reduce(
    (collect, key) => ({ ...collect, ...createColor(key) }),
    {}
  );
  return {
    colors: checkboxColors,
    root: {
      "@apply flex": {},
    },
    wrapper: {
      "@apply relative": {},
    },
    input: {
      "-webkit-tap-highlight-color": "transparent",
      "@apply appearance-none bg-white border border-[#ced4da] block cursor-default rounded-[4px]": {},
      transition: "border-color 100ms ease,background-color 100ms ease"
    },
    icon: {
      "@apply pointer-events-none absolute inset-0 m-auto flex items-center h-full": {}
    },
    defaultIcon: {
    },
    checked: {
      ".checkbox-input": {
        backgroundColor: "var(--tw-kagura-checkbox-color)",
        borderColor: "var(--tw-kagura-checkbox-color)"
      },
      ".checkbox-default-icon": {
        content: `url("data:image/svg+xml,%3Csvg viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z' fill='white' fill-rule='evenodd' clip-rule='evenodd'%3E%3C/path%3E%3C/svg%3E")`
      }
    },
    indeterminate: {
      "&[data-checked='true']": {
        ".checkbox-default-icon": {
          content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 32 6'%3E%3Crect width='32' height='6' fill='white' rx='3'%3E%3C/rect%3E%3C/svg%3E")`
        }
      },
      ".checkbox-default-icon": {
        content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 32 6'%3E%3Crect width='32' height='6' fill='currentColor' rx='3'%3E%3C/rect%3E%3C/svg%3E")`
      }
    },
    sizes: checkboxSizes,
    disabled: {
      ".checkbox-input": {
        backgroundColor: '#e9ecef',
        borderColor: '#dee2e6',
        cursor: "not-allowed"
      },
      ".checkbox-label": {
        color: '#adb5bd'
      }
    },
    labelWrapper: {
      fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
    },
    label: {
      "@apply pl-3 cursor-default": {}
    },
  }
}
