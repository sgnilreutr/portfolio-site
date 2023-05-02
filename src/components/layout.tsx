import AnimatedMountUnmount from 'components/animateUnMount'
import Footer from 'components/footer/footer'
import Header from 'components/header/header'

import type { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <AnimatedMountUnmount>{children}</AnimatedMountUnmount>
      <Footer />
    </>
  )
}

export default Layout
