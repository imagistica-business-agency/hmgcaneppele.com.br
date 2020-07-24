import styled from 'styled-components'
import Img from 'gatsby-image'

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const ImageWrapper = styled.div`
  height: 325px;
  padding: 0 60px;
  text-align: left;
`

export const Image = styled(Img)`
  height: 325px;
  margin-bottom: 20px;
`

export const Name = styled.h4`
  font-size: 18px;
  line-height: 1.3em;
  color: #181a48;
  font-family: 'Poppins', Sans-serif;
  font-weight: 400;
  letter-spacing: 0.5px;
  padding: 0;
  margin: 0;
`

export const Position = styled.span`
  color: #a8a8a8;
  font-family: 'Poppins', Sans-serif;
  font-size: 13px;
  text-transform: uppercase;
`
