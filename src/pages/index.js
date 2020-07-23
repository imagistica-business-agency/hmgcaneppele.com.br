import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Container } from '../components/Container/styled'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <h1>Hi people</h1>
    </Container>
  </Layout>
)

export default IndexPage
