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
        activeClassName="active"
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
        activeClassName="active"
      >
        <S.MenuBarItem>
          <Search />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarItem
        to="#"
        title="Nav to top"
        onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar
