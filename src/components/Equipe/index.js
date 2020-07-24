import React from 'react'

import EquipeList from '../EquipeList'

import { Container } from '../Container/styled'
import * as S from './styled'

const Equipe = () => {
  return (
    <>
      <S.EquipeWrapper>
        <Container>
          <h2>Equipe técnica HMG {'&'} CANEPPELE</h2>
          <EquipeList />
        </Container>
      </S.EquipeWrapper>
    </>
  )
}

export default Equipe
