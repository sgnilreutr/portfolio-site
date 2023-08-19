import type { Metadata } from 'next'

export const SITE_NAME = 'Robbert Tuerlings'
export const DEFAULT_META_DESC =
  'Software t(h)inker. I build software that helps people and businesses.'

export const DEFAULT_URL = 'https://rtgs.me'

export const metadata: Metadata = {
  metadataBase: new URL(DEFAULT_URL),
  description: DEFAULT_META_DESC,
  twitter: {
    card: 'summary_large_image',
    creator: '@sgnilreutr',
    description: DEFAULT_META_DESC,
  },
  openGraph: {
    type: 'website',
    description: DEFAULT_META_DESC,
    url: DEFAULT_URL,
    siteName: SITE_NAME,
  },
  alternates: {
    canonical: '/',
  },
}
