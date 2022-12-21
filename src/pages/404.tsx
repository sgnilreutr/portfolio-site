import Layout from 'components/layout'
import SEO from 'components/seo'
import Link from 'next/link'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="px-10 py-4 mx-12 my-0 md:py-8 md:pt-32 lg:pt-40">
      <h1 className="text-5xl md:text-6xl">
        Hold your horses{' '}
        <span role="img" aria-label="horse">
          🐴
        </span>
      </h1>
      <p className="mb-0 text-xl leading-6 md:text-3xl lg:text-4xl">
        I haven&apos; made that page (yet).
      </p>
      <div className="flex items-center justify-center mt-10">
        <Link
          className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200"
          href="/"
        >
          Take me back!
        </Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
