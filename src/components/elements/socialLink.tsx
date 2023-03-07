const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string
  icon: JSX.Element
  label: string
}) => {
  return (
    <a
      className="duration-200 ease-in-out hover:text-orange-500 dark:text:bg-orange-700 opacity-80 last:mr-0"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <span className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-no-wrap border-0">
        {label}
      </span>
    </a>
  )
}

export default SocialLink
