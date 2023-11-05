import { PresetInputWrapper, Callable } from "@kagura-ui/core/contracts";

export const inputWrapper: Callable<Partial<PresetInputWrapper>> = () => {
  return {
    root: {
      fontFamily:
        "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
      lineHeight: "1.5",
      "& .input-wrapper-description+.input, & .input-wrapper-error+.input": {
        "@apply mt-1": {},
      },
      "& .input+.input-wrapper-description, & .input+.input-wrapper-error": {
        "@apply mt-1": {},
      },
      "& .input-wrapper-label+.input": {
        "@apply mt-2": {},
      },
    },
    required: {
      "@apply text-danger": {},
    },
    label: {
      "@apply inline-block": {},
    },
    description: {
      "@apply text-secondary block text-[0.875em]": {},
    },
    error: {
      "@apply text-danger block text-[0.875em]": {},
    },
  };
};
