import Head from 'next/head'
// import Logo from 'public/images/100x100px_EL_01.jpg'

const SITE_NAME = 'Robbert Tuerlings'
const DEFAULT_META_DESC =
  'Software thinker. I build software that helps people and businesses.'

const DEFAULT_URL = 'https://rtgs.me'

interface ISeo {
  canonicalUrl?: string
  description?: string
  image?: string
  title?: string
  uri?: string
}

export default function SEO({
  canonicalUrl,
  description = DEFAULT_META_DESC,
  image = '',
  title,
  uri,
}: ISeo) {
  const fullSeo = {
    metaTitle: `${SITE_NAME} ${title && `| ${title}`}`,
    metaDescription: description,
    shareImage: image,
    // shareImage: image || Logo,
    url: uri ? `${DEFAULT_URL}/${uri}` : DEFAULT_URL,
  }

  return (
    <Head>
      <title>{fullSeo.metaTitle}</title>
      <meta name="title" content={fullSeo.metaTitle} />
      <meta name="description" content={fullSeo.metaDescription} />
      <link rel="icon" href="/favicon.ico" />

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullSeo.url} />
      <meta property="og:title" content={fullSeo.metaTitle} />
      <meta property="og:description" content={fullSeo.metaDescription} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullSeo.url} />
      <meta property="twitter:title" content={fullSeo.metaTitle} />
      <meta property="twitter:description" content={fullSeo.metaDescription} />
      <meta property="twitter:image" content={image} />
    </Head>
  )
}
