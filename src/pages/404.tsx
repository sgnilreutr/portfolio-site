import InternalLink from 'components/elements/internalLink'
import Layout from 'components/layout'
import SEO from 'components/seo'

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
        <InternalLink href="/">Take me back!</InternalLink>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
