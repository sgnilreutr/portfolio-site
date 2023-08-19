import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import classNames from 'lib/classNames'

interface StyledLinkProps extends ComponentPropsWithoutRef<'a'> {
  href: string
  children: ReactNode
}

const StyledLink = ({ href, children, ...rest }: StyledLinkProps) => {
  return (
    <a
      {...rest}
      className={classNames(
        'underline duration-100 ease-in bg-transparent',
        'active:text-orange-500 hover:text-orange-700',
        'dark:active:text-orange-700',
        rest.className
      )}
      href={href}
    >
      {children}
    </a>
  )
}

export default StyledLink
