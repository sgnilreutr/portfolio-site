import type { ReactNode } from 'react'

const StyledLink = ({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) => {
  return (
    <a
      className="underline duration-100 ease-in bg-transparent hover:text-orange-500 active:text-orange-500 dark:hover:text-orange-700"
      href={href}
    >
      {children}
    </a>
  )
}

export default StyledLink
