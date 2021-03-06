import React from "react"

import * as S from "./styled"

import links from "./content"

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      {links.map((link, index) => (
        <S.MenuLinksItem key={index}>
          <S.MenuLinksLink
            cover
            direction="left"
            bg="#2a2139"
            duration={0.6}
            to={link.url}
            activeClassName="active"
          >
            {link.label}
          </S.MenuLinksLink>
        </S.MenuLinksItem>
      ))}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
)

export default MenuLinks
