import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`podcast`, `howto`, `react`]} />
    <h1>Hello World!</h1>
    <p>Welcome to Making a Podcast </p>
  </Layout>
)

export default IndexPage
