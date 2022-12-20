import Header from './header/header'
import Footer from './footer/footer'
// import './layout.css'
import AnimatedMountUnmount from './animateUnMount'

const Layout = ({ children }: { children: React.ReactNode }) => {
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
