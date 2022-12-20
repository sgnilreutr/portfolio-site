import styled from '@emotion/styled'

interface ButtonInnerProps {
  label: string
}

interface ButtonProps {
  onClick: () => void
  className: string
  type: string
  disabled: boolean
  title: string
  isLoading: boolean
  icon: JSX.Element
  label: string
}

const ButtonInner = styled.span<ButtonInnerProps>`
  padding-right: ${({ label }) => (label ? '8px' : 0)};
`

export const CustomButton = ({
  onClick,
  className,
  type,
  disabled,
  title,
  isLoading,
  icon,
  label,
}: ButtonProps) => {
  return (
    <button
      onClick={() => onClick}
      className={className}
      type={type !== 'submit' ? 'button' : 'submit'}
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

export const CustomButtonSmall = ({
  onClick,
  className,
  type,
  disabled,
  isLoading,
  icon,
  label,
}: ButtonProps) => {
  return (
    <button
      onClick={() => onClick}
      className={className}
      type={type !== 'submit' ? 'button' : 'submit'}
      disabled={disabled}
    >
      <div>
        {icon && !isLoading && <span>{icon}</span>}
        <span>{label}</span>
      </div>
    </button>
  )
}
