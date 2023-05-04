import type { ReactNode } from 'react'

interface ContentWrapperProps {
  children: ReactNode
}

const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return <div className="max-w-2xl px-2 md:px-0 relative mx-auto">{children}</div>
}

export default ContentWrapper
