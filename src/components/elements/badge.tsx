const backgroundColorMap = {
  dev: `bg-orange-500 dark:bg-orange-700`,
  pm: `bg-zinc-700`,
}
const colorMap = {
  dev: `text-zinc-800`,
  pm: `text-zinc-100 dark:text-zinc-400`,
}

const titleMap = {
  dev: 'I have participated in this project as a developer',
  pm: 'I have participated in this project as a project manager',
}

interface BadgeProps {
  label: string
  variant: string
}

const Badge = ({ label, variant }: BadgeProps) => {
  return (
    <span
      title={titleMap[variant as keyof typeof titleMap]}
      className={`inline-block px-3 py-1 text-xs font-bold leading-none text-center whitespace-no-wrap rounded-md ${
        backgroundColorMap[variant as keyof typeof backgroundColorMap]
      } ${colorMap[variant as keyof typeof colorMap]}`}
    >
      {label}
    </span>
  )
}

export default Badge
