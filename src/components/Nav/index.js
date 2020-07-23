import React from 'react'

import * as S from './styled'
import links from './links'

const Nav = () => (
  <S.NavWrapper>
    <S.NavList>
      {links.map((link, i) => (
        <S.NavItem key={i}>
          <S.NavItemLink to={link.url} activeClassName="active">
            {link.label}
          </S.NavItemLink>
        </S.NavItem>
      ))}
    </S.NavList>
  </S.NavWrapper>
)

export default Nav
