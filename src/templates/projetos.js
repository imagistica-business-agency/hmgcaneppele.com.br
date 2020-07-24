import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const ProjetoItem = ({ data }) => {
  const projeto = data.markdownRemark

  return (
    <Layout>
      <SEO title={projeto.frontmatter.title} />

      {projeto.frontmatter.title}

      <div
        dangerouslySetInnerHTML={{
          __html: projeto.html
        }}
      />
    </Layout>
  )
}

export const query = graphql`
  query Projeto($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
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
