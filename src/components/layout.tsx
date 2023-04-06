import AnimatedMountUnmount from 'components/animateUnMount'
import Footer from 'components/footer/footer'
import Header from 'components/header/header'

import type { ReactNode } from 'react'

interface ILayout {
  children: ReactNode
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      <AnimatedMountUnmount>{children}</AnimatedMountUnmount>
      <Footer />
    </>
  )
}

export default Layout
