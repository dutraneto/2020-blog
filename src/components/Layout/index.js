import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { TransitionPortal } from "gatsby-plugin-transition-link"

import GlobalStyles from "../../styles/globals"
import Profile from "../Profile"
import Sidebar from "../Sidebar"
import MenuBar from "../Menubar"
// import styles
import * as S from "./styled"

const Layout = ({ children }) => {
  // useState
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            position
          }
        }
      }
    `
  )
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Profile
          author={site.siteMetadata.author}
          position={site.siteMetadata.position}
          isMobileHeader={true}
        />
        <Sidebar
          site={site.siteMetadata}
          setIsMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
        />
      </TransitionPortal>

      <S.LayoutMain>{children}</S.LayoutMain>

      <TransitionPortal level="top">
        <MenuBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      </TransitionPortal>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
