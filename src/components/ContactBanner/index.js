import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Button from '../Button'
import * as S from './styled'

const ContactBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ContactBanner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const image = data.file.childImageSharp.fluid

  return (
    <S.ContactBannerWrapper fluid={image}>
      <S.Overlay>
        <S.Title>
          Deseja construir ou reformar com a HMG {'&'} Canepelle?
        </S.Title>
        <Button text="Iniciar conversa" link="#" alt="Iniciar conversa" />
      </S.Overlay>
    </S.ContactBannerWrapper>
  )
}

export default ContactBanner
