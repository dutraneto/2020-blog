import styled from "styled-components"
import media from "styled-media-query"

import { Link } from "gatsby"

export const MenuLinksWrapper = styled.nav`
  ${media.lessThan("large")`
    display: flex;
    justify-content: center;
    flex-grow: 2;
  `}

  ${media.lessThan("medium")`
    display: none;
  `}
`

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;

  ${media.lessThan("large")`
    display: flex;
    margin-left: 1rem;
  `}
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: var(--color-white);
  }

  ${media.lessThan("large")`
      margin-left: 1rem;
  `}
`

export const MenuLinksLink = styled(Link)`
  color: #626068;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--color-white);
    font-weight: 300;
  }
`
