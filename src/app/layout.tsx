import AnimatedMountUnmount from 'components/animateUnMount'
import Footer from 'components/footer/footer'
import Header from 'components/header/header'
import 'styles/globals.css'

import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

interface LayoutProps {
  children: ReactNode
}

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="relative pt-0 pb-6 my-0 font-normal transition-colors">
        <Header />
        <AnimatedMountUnmount font={inter}>{children}</AnimatedMountUnmount>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
