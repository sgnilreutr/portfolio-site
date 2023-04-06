import Link from 'next/link'
import type { ReactNode } from 'react'

interface IInternalLink {
  children: ReactNode
  href: string
}

const InternalLink = ({ href, children }: IInternalLink) => {
  return (
    <Link
      className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200"
      href={href}
    >
      {children}
    </Link>
  )
}

export default InternalLink
