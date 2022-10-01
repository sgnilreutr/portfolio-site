import React from 'react'
import styled from '@emotion/styled'

interface IStyledBadge {
  variant: 'dev' | 'pm'
}

const backgroundColorMap = {
  dev: `var(--color-orange)`,
  pm: `var(--color-text-LM)`,
}
const colorMap = {
  dev: `var(--color-text-LM)`,
  pm: `var(--color-text-DM)`,
}

const titleMap = {
  dev: 'I have participated in this project as a developer',
  pm: 'I have participated in this project as a project manager',
}

const StyledBadge = styled.span<IStyledBadge>`
    background-color: ${({ variant }) => backgroundColorMap[variant]};
    border-radius: 0.375em;
    color: ${({ variant }) => colorMap[variant]};
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1;
    padding: 0.35em 0.65em;
    text-align: center;
    vertical-align; baseline;
    white-space: nowrap;
`

const Badge = ({
  label,
  variant,
}: {
  label: string
  variant: 'dev' | 'pm'
}) => {
  return (
    <StyledBadge title={titleMap[variant]} variant={variant}>
      {label}
    </StyledBadge>
  )
}

export default Badge
