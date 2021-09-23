import React from "react"
import styled from "@emotion/styled"
interface ButtonInnerProps {
  label: string
}

interface ButtonProps {
  onClick: {},
  className: string,
  type: string,
  disabled: boolean,
  title: string,
  isLoading: boolean,
  icon: {},
  label: string,
}

const ButtonInner = styled.span<ButtonInnerProps>`
  padding-right: ${ props => (props.label ? "8px" : 0) };
`

export const CustomButton = (props: ButtonProps) => {
  console.log(props)
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
      onClick={() => onClick}
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

export const CustomButtonSmall = (props: ButtonProps) => {
  const { onClick, className, type, disabled, isLoading, icon, label } = props
  return (
    <button
      onClick={() => onClick}
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
