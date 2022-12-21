import AnimatedMountUnmount from 'components/animateUnMount'
import Footer from 'components/footer/footer'
import Header from 'components/header/header'

import type { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main>
        <AnimatedMountUnmount>{children}</AnimatedMountUnmount>
      </main>
      <Footer />
    </>
  )
}

export default Layout
