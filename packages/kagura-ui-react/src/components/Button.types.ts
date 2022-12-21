import { Size } from "kagura-ui/contracts/tailwind"
import { ButtonVariant, ButtonColor } from "kagura-ui/contracts/button"
import { ButtonHTMLAttributes } from "react"

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  size?: Size
  color?: ButtonColor
  variant?: ButtonVariant
}
