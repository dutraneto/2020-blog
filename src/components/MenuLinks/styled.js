import styled from "styled-components"

import { Link } from "gatsby"

export const MenuLinksWrapper = styled.nav``

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: var(--color-white);
  }
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
