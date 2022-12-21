import React from "react"
import { ButtonProps } from "./Button.types"

const Button = ({ size, children, className, color, variant }: ButtonProps) => {
  return (
    <button className={`button button-${color} button-${size} button-${variant} ${className || ''}`}>
      <div className="button-inner">
        <span className="button-label">{children}</span>
      </div>
    </button>
  )
}

export default Button
