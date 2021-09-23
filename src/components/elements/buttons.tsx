import React from "react"
import styled from "@emotion/styled"

interface ButtonInnerProps {
  label: string
}

const ButtonInner = styled.span<ButtonInnerProps>`
  padding-right: ${ props => (props.label ? "8px" : 0) };
`

export const CustomButton = props => {
  const {
    onClick,
    className,
    type,
    disabled,
    title,
    isLoading,
    icon,
    label,
  } = props
  return (
    <button
      onClick={onClick}
      className={className}
      type={type !== "submit" ? "button" : "submit"}
      disabled={disabled}
      title={title}
    >
      <div>
        {icon && !isLoading && <ButtonInner label={label}>{icon}</ButtonInner>}
        {label && <span>{label}</span>}
      </div>
    </button>
  )
}

export const CustomButtonSmall = props => {
  const { onClick, className, type, disabled, isLoading, icon, label } = props
  return (
    <button
      onClick={onClick}
      className={className}
      type={type !== "submit" ? "button" : "submit"}
      disabled={disabled}
    >
      <div>
        {icon && !isLoading && <span>{icon}</span>}
        <span>{label}</span>
      </div>
    </button>
  )
}
