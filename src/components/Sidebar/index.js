import React from "react"

import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"

import * as S from "./styled"

const Sidebar = ({ site: { author, position }, isMenuOpen, setIsMenuOpen }) => (
  <S.SidebarWrapper isMenuOpen={isMenuOpen}>
    <Profile author={author} position={position} isMobileHeader={false} />
    <S.SidebarLinksContainer>
      <SocialLinks />
      <MenuLinks setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
    </S.SidebarLinksContainer>
  </S.SidebarWrapper>
)

export default Sidebar
