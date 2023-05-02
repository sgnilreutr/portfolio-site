import classNames from 'lib/classNames'
import type { ReactNode } from 'react'

interface StyledLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
}

const StyledLink = ({ href, children, ...rest }: StyledLinkProps) => {
  return (
    <a
      {...rest}
      className={classNames(
        'underline duration-100 ease-in bg-transparent',
        'hover:text-orange-500  dark:hover:text-orange-700',
        'active:text-orange-500 dark:active:text-orange-700',
        rest.className
      )}
      href={href}
    >
      {children}
    </a>
  )
}

export default StyledLink
