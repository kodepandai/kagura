import { ColorKeys, Size, ButtonVariant } from "@kagura-ui/core/contracts";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  size?: Size;
  color?: ColorKeys;
  variant?: ButtonVariant;
  classes?: Partial<ButtonClasses>;
}
interface ButtonClasses {
  root: string;
  inner: string;
  label: string;
}

export const Button = ({
  size = "md",
  children,
  className,
  color = "primary",
  variant = "filled",
  classes = {},
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`[ button ] [ ${classes.root || ""} ]`}
      data-variant={variant}
      data-size={size}
      data-color={color}
      {...props}
    >
      <div className={`[ button-inner ] [ ${classes.inner || ""} ]`}>
        <span className={`[ button-label ] [ ${classes.label || ""} ]`}>
          {children}
        </span>
      </div>
    </button>
  );
};
