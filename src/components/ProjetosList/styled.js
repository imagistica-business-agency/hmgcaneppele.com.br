import styled from 'styled-components'
import Img from 'gatsby-image'

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 40px;
`

export const Image = styled(Img)`
  height: 480px;
`
