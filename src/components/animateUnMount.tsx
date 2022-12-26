import type { ReactNode } from 'react'

const AnimatedMountUnmount = ({ children }: { children: ReactNode }) => (
  <div className="motion-safe:animate-fadeInUp">{children}</div>
)

export default AnimatedMountUnmount
