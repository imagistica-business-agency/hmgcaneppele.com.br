import React from 'react'
import { Link } from 'gatsby'

import * as S from './styled'

const Button = ({ text, link, alt }) => (
  <Link to={link} alt={alt}>
    <S.Button>{text}</S.Button>
  </Link>
)

export default Button
