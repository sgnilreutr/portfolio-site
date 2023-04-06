import type { ReactNode } from 'react'

interface IAnimatedMountUnmount {
  children: ReactNode
}

const AnimatedMountUnmount = ({ children }: IAnimatedMountUnmount) => (
  <div className="motion-safe:animate-fadeInUp">{children}</div>
)

export default AnimatedMountUnmount
