import type { NextFontWithVariable } from 'next/dist/compiled/@next/font'
import type { ReactNode } from 'react'

import classNames from 'lib/classNames'

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
