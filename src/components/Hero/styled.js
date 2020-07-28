import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

export const HeroWrapper = styled.header`
  color: #fff;
`

export const HeroImage = styled(BackgroundImage)``

export const Overlay = styled.div`
  background: linear-gradient(-90deg, rgba(255, 255, 255, 0) 0%, #071021 100%);
  background-blend-mode: multiply;
  padding: 400px 0;
  height: 100%;
`

export const TitleWrapper = styled.div``

export const Title = styled.h1``

export const SubTitleWrapper = styled.div``

export const SubTitle = styled.h2``
