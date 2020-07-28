import React from 'react'

import ProjetosList from '../ProjetosList'
import DividerCenter from '../DividerCenter'
import Button from '../Button'

import { Container } from '../Container/styled'
import * as S from './styled'

const Projetos = () => {
  return (
    <>
      <S.ProjetosWrapper>
        <Container>
          <h2>Nossos projetos</h2>
          <DividerCenter />
        </Container>
      </S.ProjetosWrapper>
      <S.ProjetosItems>
        <Container>
          <ProjetosList />
          <Button text="Todos os projetos" link="#" alt="Todos os projetos" />
        </Container>
      </S.ProjetosItems>
    </>
  )
}

export default Projetos
