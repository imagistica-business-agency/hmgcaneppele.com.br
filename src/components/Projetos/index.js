import React from 'react'

import ProjetosList from '../ProjetosList'

import { Container } from '../Container/styled'
import * as S from './styled'

const Projetos = () => {
  return (
    <>
      <S.ProjetosWrapper>
        <Container>
          <h2>Nossos projetos</h2>
        </Container>
      </S.ProjetosWrapper>
      <S.ProjetosItems>
        <Container>
          <ProjetosList />
        </Container>
      </S.ProjetosItems>
    </>
  )
}

export default Projetos
