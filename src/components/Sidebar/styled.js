import styled from "styled-components"
import media from "styled-media-query"

export const SidebarWrapper = styled.aside`
  align-items: center;
  background: var(--color-background-sidebar);
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 2rem 0 0 1.5rem;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 16vw;
  max-width: 13rem;
  border-radius: 50px;
  box-shadow: -5px 5px 0px #1e1527, 5px -5px 0px #2a1e37;
  z-index: 999;

  ${media.lessThan("large")`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    height: auto;
    padding: 1rem;
    width: 100vw;
    max-width: 100%;
    margin: 0;
    border-radius: 0;
  `}
`
