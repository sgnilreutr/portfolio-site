import classNames from 'lib/classNames'
import type { NextFontWithVariable } from 'next/dist/compiled/@next/font'
import type { ReactNode } from 'react'

interface AnimatedMountUnmountProps {
  children: ReactNode
  font: NextFontWithVariable
}

const AnimatedMountUnmount = ({
  children,
  font,
}: AnimatedMountUnmountProps) => (
  <main className={classNames(font.variable, 'motion-safe:animate-fadeInUp')}>
    {children}
  </main>
)

export default AnimatedMountUnmount
