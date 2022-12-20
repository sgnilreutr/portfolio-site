import { NextSeo } from 'next-seo'

const SITE_NAME = 'Robbert Tuerlings'
const DEFAULT_META_DESC =
  'Software thinker. I build software that helps people and businesses.'

export default function SEO(seo: any) {
  const fullSeo = {
    ...seo,
    metaTitle: `${SITE_NAME} ${seo?.title && `| ${seo.title}`}`,
    metaDescription: seo?.description ?? DEFAULT_META_DESC,
    shareImage: seo?.image,
  }

  return (
    <NextSeo
      title={fullSeo.metaTitle}
      openGraph={{
        url: `${fullSeo.url}`,
        title: `${fullSeo.metaTitle}`,
        description: `${fullSeo.metaDescription}`,
        images: [
          { url: fullSeo.shareImage },
          // {
          //   url: 'https://www.example.ie/og-image-01.jpg',
          //   width: 800,
          //   height: 600,
          //   alt: 'Og Image Alt',
          //   type: 'image/jpeg',
          // },
        ],
        site_name: SITE_NAME,
        type: fullSeo.type ?? 'website',
      }}
    />
  )
}
