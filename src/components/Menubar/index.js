import React from "react"
import * as S from "./styled"

import { Home } from "@styled-icons/feather/Home"
import { Search } from "@styled-icons/evil/Search"
import { ArrowUp } from "@styled-icons/feather/ArrowUp"
import { Bulb } from "@styled-icons/boxicons-regular/Bulb"
import { Grid } from "@styled-icons/boxicons-solid/Grid"

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Go back to home">
        <S.MenuBarItem>
          <Home />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search/" title="Search">
        <S.MenuBarItem>
          <Search />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarItem title="Switch theme">
        <Bulb />
      </S.MenuBarItem>
      <S.MenuBarItem title="Switch visualization">
        <Grid />
      </S.MenuBarItem>
      <S.MenuBarItem title="Nav to top">
        <ArrowUp />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar
