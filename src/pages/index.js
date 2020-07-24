import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Projetos from '../components/Projetos'
import Diferencial from '../components/Diferencial'
import Equipe from '../components/Equipe'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Projetos />
    <Diferencial />
    <Equipe />
  </Layout>
)

export default IndexPage
