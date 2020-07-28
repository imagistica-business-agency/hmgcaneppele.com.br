import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'
import Divider from '../Divider'
import Button from '../Button'
import { Container } from '../Container/styled'

const Objetivo = () => {
  const data = useStaticQuery(
    graphql`
      query {
        comercial: file(relativePath: { eq: "atuacao-comercial.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        varejo: file(relativePath: { eq: "atuacao-varejo.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        hospitalar: file(relativePath: { eq: "atuacao-hospitalar.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const comercialImage = data.comercial.childImageSharp.fluid
  const varejoImage = data.varejo.childImageSharp.fluid
  const hospitalarImage = data.hospitalar.childImageSharp.fluid

  return (
    <Container>
      <S.ObjetivoWrapper>
        <S.TextWrapper>
          <h2>Nosso objetivo</h2>
          <Divider />
          <p>
            A <strong>HMG {'&'} CANEPPELE</strong> tem como maior objetivo
            suprir as necessidades dos clientes e parceiros, atuando desde o
            processo de legalização da obra até a entrega da estrutura
            edificada.
          </p>
          <Button text="Todos os seguimentos" link="#" alt="" />
        </S.TextWrapper>
        <S.ImageWrapper fluid={comercialImage}>
          <S.Overlay>
            <div>
              <S.ImageTitle>Lorem ipsum</S.ImageTitle>
              <S.ImageText>Lorem ipsum</S.ImageText>
            </div>
          </S.Overlay>
        </S.ImageWrapper>
        <S.ImageWrapper fluid={varejoImage}>
          <S.Overlay>
            <div>
              <S.ImageTitle>Lorem ipsum</S.ImageTitle>
              <S.ImageText>Lorem ipsum</S.ImageText>
            </div>
          </S.Overlay>
        </S.ImageWrapper>
        <S.ImageWrapper fluid={hospitalarImage}>
          <S.Overlay>
            <div>
              <S.ImageTitle>Lorem ipsum</S.ImageTitle>
              <S.ImageText>Lorem ipsum</S.ImageText>
            </div>
          </S.Overlay>
        </S.ImageWrapper>
      </S.ObjetivoWrapper>
    </Container>
  )
}

export default Objetivo
