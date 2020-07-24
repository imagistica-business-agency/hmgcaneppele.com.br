import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const ProjetoItem = ({ data }) => {
  const projeto = data.markdownRemark

  return (
    <Layout>
      <SEO title={projeto.frontmatter.title} />

      {projeto.frontmatter.name}

      <div
        dangerouslySetInnerHTML={{
          __html: projeto.html
        }}
      />
    </Layout>
  )
}

export const query = graphql`
  query Equipe($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        name
        position
        image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      id
      html
    }
  }
`

export default ProjetoItem
