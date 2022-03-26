import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

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
      <p>I haven't made that page (yet).</p>
      <Link to="/">Take me back!</Link>
    </div>
  </Layout>
)

export default NotFoundPage
