import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const EquipeList = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        limit: 3
        filter: { frontmatter: { templateKey: { eq: "equipe" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              name
              position
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

  const equipeItens = allMarkdownRemark.edges

  return (
    <S.ListWrapper>
      {equipeItens.map(({ node: equipeItem }) => (
        <S.ImageWrapper key={equipeItem.frontmatter.name}>
          {equipeItem.frontmatter.image && (
            <S.Image
              fluid={equipeItem.frontmatter.image.childImageSharp.fluid}
            />
          )}
          <S.Name>{equipeItem.frontmatter.name}</S.Name>
          <S.Position>{equipeItem.frontmatter.position}</S.Position>
        </S.ImageWrapper>
      ))}
    </S.ListWrapper>
  )
}

export default EquipeList
