import styled from "styled-components"
import media from "styled-media-query"

export const CommentsWrapper = styled.section`
  margin: auto;
  width: 45rem;
  padding: 3rem;

  ${media.lessThan("medium")`
    width: 100%;
    max-width: 92vw;
    padding: 3rem 2rem;
  `}

  ${media.lessThan("small")`
    padding: 3rem 1rem;
  `}

  iframe[src*="ads-iframe"] {
    display: none;
  }

  #disqus_thread {
    a {
      color: ${props => props.color} !important;
    }
  }
`

export const CommentsTitle = styled.h2`
  color: var(--color-white);
  font-size: 2.1rem;
  font-weight: 700;
  padding-bottom: 2rem;
`
