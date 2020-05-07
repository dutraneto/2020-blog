import styled from "styled-components"

export const CommentsWrapper = styled.section`
  margin: auto;
  width: 46.1rem;
  max-width: 79vw;
  padding: 3rem 6.4rem 3rem;

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
