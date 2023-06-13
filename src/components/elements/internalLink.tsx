import classNames from 'lib/classNames'
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import type { ReactNode } from 'react'

interface InternalLinkProps extends LinkProps {
  className?: string
  children: ReactNode
  href: string
}

const DEFAULT_LINK_STYLES =
  'p-2 rounded-sm hover:bg-zinc-300 text-zinc-900 transition dark:hover:bg-zinc-800 dark:text-zinc-100'

const InternalLink = ({
  href,
  className,
  children,
  ...rest
}: InternalLinkProps) => {
  return (
    <Link
      {...rest}
      className={classNames(DEFAULT_LINK_STYLES, className)}
      href={href}
    >
      {children}
    </Link>
  )
}

export default InternalLink
