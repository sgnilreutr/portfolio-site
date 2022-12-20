import Layout from 'components/layout'
import SEO from 'components/seo'
import Link from 'next/link'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="main">
      <h1>
        Hold your horses{' '}
        <span role="img" aria-label="horse">
          🐴
        </span>
      </h1>
      <p>I haven&apost made that page (yet).</p>
      <Link href="/">Take me back!</Link>
    </div>
  </Layout>
)

export default NotFoundPage
