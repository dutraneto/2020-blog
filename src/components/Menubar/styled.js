import styled from "styled-components"

import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  position: fixed;
  right: 0;
  width: 3.75rem;
  background: var(--color-background);
  border-left: 2px dashed var(--color-green);
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuBarLink = styled(Link)`
  display: block;
`

export const MenuBarItem = styled.span`
  color: var(--color-white);
  cursor: pointer;
  display: block;
  height: 30px;
  width: 30px;
  position: relative;
  padding: 1rem;
  transition: color 0.5s;

  &:hover {
    color: var(--color-green);
  }
`
