import React from 'react'
import { Container } from '../Container/styled'
import * as S from './styled'
import Divider from '../Divider'

const Diferenciais = () => (
  <Container>
    <S.DiferencialWrapper>
      <div>
        <h2>Nosso Diferencial</h2>
        <Divider />
        <p>
          Em todos os serviços prestados são utilizados equipamentos de última
          geração, que consigam acompanhar as tecnologias e materiais utilizados
          pela <strong>HMG {'&'} CANEPPELE</strong>, e que otimizem a execução
          do trabalho, garantindo segurança, praticidade e rapidez para a sua
          obra.
        </p>
      </div>
      <div>
        <S.DiferencialTitle>
          Experimentação de notas técnicas
        </S.DiferencialTitle>
        <p>
          O diferencial da <strong>HMG {'&'} CANEPPELE</strong> é a
          experimentação de novas técnicas, estudadas e experimentadas por
          nossos departamentos de tecnologia e inovação com o objetivo de
          fornecer sempre o melhor serviço para nossos clientes.
        </p>
      </div>
      <div>
        <S.DiferencialTitle>
          Adoção de métodos e sistemas construtivos inovadores
        </S.DiferencialTitle>
        <p>
          A adoção de métodos e de sistemas construtivos inovadores é componente
          principal do DNA da <strong>HMG {'&'} CANEPPELE</strong>, onde é
          buscado vender a solução para o nosso cliente e não apenas
          contabilizar mais uma obra.
        </p>
      </div>
    </S.DiferencialWrapper>
  </Container>
)

export default Diferenciais
