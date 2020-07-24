import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const ProjetosList = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        limit: 3
        sort: { order: DESC, fields: frontmatter___date }
        filter: { frontmatter: { templateKey: { eq: "projetos" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              image {
                childImageSharp {
                  fluid(maxWidth: 580, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const projetoItens = allMarkdownRemark.edges

  return (
    <S.ListWrapper>
      {projetoItens.map(({ node: projetoItem }) => (
        <div key={projetoItem.fields.slug}>
          {projetoItem.frontmatter.image && (
            <S.Image
              fluid={projetoItem.frontmatter.image.childImageSharp.fluid}
            />
          )}
        </div>
      ))}
    </S.ListWrapper>
  )
}

export default ProjetosList
