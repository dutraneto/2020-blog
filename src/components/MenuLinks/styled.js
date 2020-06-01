import styled from "styled-components"
import media from "styled-media-query"

// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuLinksWrapper = styled.nav`
  ${media.lessThan("large")`
    display: flex;
    justify-content: center;
    flex-grow: 2;
  `}
`

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;

  ${media.lessThan("large")`
    display: flex;
    flex-direction: column;
    margin-left: 0;
  `}
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: var(--color-white);
  }

  ${media.lessThan("large")`
      margin-left: 0;
  `}
`

export const MenuLinksLink = styled(AniLink)`
  color: #626068;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--color-white);
    font-weight: 300;
  }
`
