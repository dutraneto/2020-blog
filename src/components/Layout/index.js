import React from "react"
import PropTypes from "prop-types"
// import Profile from "../Profile/index.jsx"
import GlobalStyles from "../../styles/globals"
import Sidebar from "../Sidebar"
import MenuBar from "../Menubar"
// import styles
import * as S from "./styled"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar />
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
