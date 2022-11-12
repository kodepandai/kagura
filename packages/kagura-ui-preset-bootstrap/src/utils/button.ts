import { RequiredColors } from "kagura-ui/contracts/tailwind";

export const createButtonColor = (color: keyof RequiredColors, className = "") => ({
  [`&-${color}`]: {
    [`@apply bg-${color} border-${color} ${className}`]: {},
    "&:hover": {
      [`@apply bg-hover-${color} border-hover-${color}`]: {}
    }
  }
})
