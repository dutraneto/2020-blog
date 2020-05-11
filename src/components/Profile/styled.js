import styled from "styled-components"
import media from "styled-media-query"

import { Link } from "gatsby"

export const ProfileWrapper = styled.section`
  color: var(--color-white);
  display: flex;
  flex-direction: column;
`

export const ProfileLink = styled(Link)`
  color: var(--color-white);
  text-decoration: none;
  transition: all 1s !important;

  ${media.lessThan("large")`
    display: flex;
    align-items: center;
    align-content: center;
    text-align: left;
  `}

  &:hover {
    color: var(--color-grey);
    background: linear-gradient(
      53.13deg,
      #ffd33d 0,
      #fb8532 19.02%,
      #ea4a5a 37.19%,
      #8a63d2 56.92%,
      #2188ff 79.93%,
      #34d058 100%
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
`

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 1rem auto 0;
  text-decoration: none;

  ${media.lessThan("large")`
    font-size: 1.2rem;
    margin: 0 0 0 10px;
  `}
`

export const ProfilePosition = styled.small`
  display: block;
  font-size: 14px;
  font-weight: 300;

  ${media.lessThan("large")`
    font-size: 0.8rem;
    margin: 0.2rem 0 0 10px;
  `}
`
