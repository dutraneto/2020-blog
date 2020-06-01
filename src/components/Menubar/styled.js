import styled from "styled-components"
import media from "styled-media-query"

import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuBarWrapper = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  position: fixed;
  right: 0;
  width: 5vw;
  max-width: 3.75rem;
  background: var(--color-background-menu);
  border-left: 2px dashed var(--color-grey);
  z-index: 99;

  ${media.lessThan("large")`
    bottom: 0%;
    height: auto;
    flex-direction: row;
    width: 100%;
    max-width: 100%;
    border: none;
    border-top: 2px dashed var(--color-grey);
  `}
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
    flex-direction: row;
  `}
`

export const MenuBarLink = styled(AniLink)`
  display: block;
`

export const MenuBarItem = styled.span`
  color: #626068;
  cursor: pointer;
  display: block;
  height: 30px;
  width: 30px;
  position: relative;
  padding: 1rem;
  transition: color 0.5s;

  &:hover {
    color: var(--color-white);
  }
`

export const MenuBarGroupMobile = styled.div`
  display: none;

  ${media.lessThan("large")`
    display: block;
  `}
`
