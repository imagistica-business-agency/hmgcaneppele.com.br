import React from 'react'
import { Link } from 'gatsby'

import Nav from '../Nav'
import NavSecondary from '../NavSecodary'
import SocialLinks from '../SocialLinks'
import logo from '../../images/logoPositive.svg'

import { Container } from '../Container/styled'
import * as S from './styled'

const Footer = () => (
  <S.FooterWrapper>
    <Container>
      <S.FooterList>
        <S.FooterItem>
          <S.FooterLogoWrapper>
            <Link to="/" alt="">
              <img src={logo} alt="" />
            </Link>
          </S.FooterLogoWrapper>
          <S.FooterAddress>
            Rua Guimarães Rosa Vila Portes, 2039 (3,39km),{' '}
            <S.NoBreak>Foz do Iguaçu,</S.NoBreak> Paraná,{' '}
            <S.NoBreak>CEP 85865-040</S.NoBreak>
          </S.FooterAddress>
        </S.FooterItem>
        <S.FooterItem>
          <h3>Páginas</h3>
          <Nav />
        </S.FooterItem>
        <S.FooterItem>
          <h3>Soluções</h3>
          <NavSecondary />
        </S.FooterItem>
        <S.FooterItem>
          <h3>Siga a HMG {'&'} Caneppele</h3>
          <SocialLinks />
        </S.FooterItem>
      </S.FooterList>
      <S.FooterCopy>
        © {new Date().getFullYear()} HMG CANEPPELE • Todos os direitos
        reservados • Desenvolvido por{' '}
        <a
          href="https://www.imagistica.com.br/"
          alt="Imagística Business Agency"
          rel="noopener noreferrer"
          target="_blank"
        >
          Imagística Business Agency
        </a>
      </S.FooterCopy>
    </Container>
  </S.FooterWrapper>
)

export default Footer
