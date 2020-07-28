import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'
import { Container } from '../Container/styled'

const Hero = () => {
  const data = useStaticQuery(
    graphql`
      query {
        banner: file(relativePath: { eq: "banner.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const bannerImage = data.banner.childImageSharp.fluid
  return (
    <S.HeroWrapper>
      <S.HeroImage fluid={bannerImage}>
        <S.Overlay>
          <Container>
            <S.TitleWrapper>
              <S.Title>SOLUÇÕES EM PROJETOS METÁLICOS.</S.Title>
            </S.TitleWrapper>
            <S.SubTitleWrapper>
              <S.SubTitle>
                Atua no seguimento da construção civil e soluções construtivas.
                Projetos, gerenciamentos de obras e soluções técnicas.
              </S.SubTitle>
            </S.SubTitleWrapper>
          </Container>
        </S.Overlay>
      </S.HeroImage>
    </S.HeroWrapper>
  )
}

export default Hero
