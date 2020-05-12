import React from "react"
import * as S from "./styled"

import { Home } from "@styled-icons/feather/Home"
import { Search } from "@styled-icons/evil/Search"
import { ArrowUp } from "@styled-icons/feather/ArrowUp"

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink
        to="/"
        cover
        direction="right"
        bg="#262235"
        duration={0.6}
        title="Go back to home"
      >
        <S.MenuBarItem>
          <Home />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink
        to="/search/"
        cover
        direction="right"
        bg="#262235"
        duration={0.6}
        title="Search"
      >
        <S.MenuBarItem>
          <Search />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarItem title="Nav to top">
        <ArrowUp />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar
