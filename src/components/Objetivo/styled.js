import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

export const ObjetivoWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: end;
  gap: 40px;
  margin: 90px 0;
`

export const TextWrapper = styled.div``

export const ImageWrapper = styled(BackgroundImage)`
  width: 100%;
`

export const Overlay = styled.div`
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    #110f0d 100%
  );
  display: grid;
  align-items: end;
  padding: 20px;
  height: 100%;
`

export const ImageTitle = styled.h3`
  color: #ffffff;
  font-size: 20px;
  line-height: 1.3em;
  text-transform: uppercase;
  margin-bottom: 0;
`

export const ImageText = styled.p`
  color: #ffffff;
  margin-bottom: 0;
`
