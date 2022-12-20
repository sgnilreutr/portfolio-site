import styled from '@emotion/styled'

interface IBadge {
  label: string
  variant: string
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

const StyledBadge = styled.span<Omit<IBadge, 'label'>>`
    background-color: ${({ variant }) =>
      backgroundColorMap[variant as keyof typeof backgroundColorMap]};
    border-radius: 0.375em;
    color: ${({ variant }) => colorMap[variant as keyof typeof colorMap]};
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1;
    padding: 0.35em 0.65em;
    text-align: center;
    vertical-align; baseline;
    white-space: nowrap;
`

const Badge = ({ label, variant }: { label: string; variant: string }) => {
  return (
    <StyledBadge
      title={titleMap[variant as keyof typeof titleMap]}
      variant={variant}
    >
      {label}
    </StyledBadge>
  )
}

export default Badge
