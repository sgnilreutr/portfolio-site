import React from "react"
import Header from "./header/header"
import Footer from "./footer/footer"
import "./layout.css"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
