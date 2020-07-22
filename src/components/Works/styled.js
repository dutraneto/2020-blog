import styled from "styled-components"
import media from "styled-media-query"

import AniLink from "gatsby-plugin-transition-link/AniLink"

export const CardWorkList = styled.section`
  margin: auto;
  width: 45rem;
  padding: 5rem 5rem 0 0;
  /* display: flex;
  flex-wrap: wrap; */

  ${media.lessThan("large")`
    padding-right: 0;
  `}

  ${media.lessThan("medium")`
    width: 100%;
    max-width: 92vw;
    margin: 0 auto;
  `}

  ${media.lessThan("small")`
    padding-top: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
  `}
`

export const CardWorkLink = styled(AniLink)`
  color: var(--color-white);
  text-decoration: none;
  transition: color 0.5s;
  margin-top: 1rem;

  &:not(:last-item) {
    margin-bottom: 1rem;
  }
`

export const CardWork = styled.article`
  padding: 2rem;
  min-height: 15rem;
  width: 100%;
  border-radius: 2px;

  &:hover {
    border: 1px solid #03edf9;
  }
`
