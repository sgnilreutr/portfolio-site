import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

import { Inter, Lora } from 'next/font/google'
import classNames from 'lib/classNames'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={classNames(inter.variable, lora.variable)}>
      <Component {...pageProps} />;
      <Analytics />
    </main>
  )
}
