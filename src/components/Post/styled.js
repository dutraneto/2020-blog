import styled from "styled-components"
import media from "styled-media-query"

export const PostHeader = styled.header`
  color: var(--color-white);
  margin: auto;
  width: 46.1rem;
  max-width: 79vw;
  padding: 5rem 5rem 0;

  ${media.lessThan("medium")`
    padding: 5rem 2rem 3rem 2rem;
    width: 100%;
    max-width: 95vw;
    margin: 0;
  `}

  ${media.lessThan("small")`
    padding-left: 1rem;
    padding-right: 1rem;
  `}
`

export const PostTitle = styled.h1`
  font-family: "Monda";
  font-size: 3.4375rem;
  font-weight: 700;
  padding: 0;
  margin: 1rem auto;
  color: ${props => props.color};

  ${media.lessThan("small")`
    font-size: 2.8rem;
  `}
`

export const PostDescription = styled.h2`
  font-size: 2rem;
  font-weight: 200;
  padding: 0;
`

export const PostDate = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  padding: 0;
  color: ${props => props.color};
`

export const MainContent = styled.section`
  margin: auto;
  width: 46.1rem;
  max-width: 79vw;
  padding: 2rem 5rem;

  ${media.lessThan("medium")`
    width: 100%;
    max-width: 95vw;
    padding-left: 2rem;
    padding-right: 2rem;
    margin: 0;
  `}

  ${media.lessThan("small")`
    padding-left: 1rem;
    padding-right: 1rem;
  `}

  .gatsby-highlight {
    border: 1px solid ${props => props.color};
    padding: 1.6rem 0 !important;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--color-white);
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0;
  }

  p {
    margin: 0 auto 1.6rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }

  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }

  li {
    padding: 0.625rem 0;

    & > ul {
      margin-bottom: 0;
    }
  }

  p,
  li {
    code {
      word-wrap: break-word;
    }
  }

  img {
    display: block;
    max-width: 100%;
  }

  iframe {
    padding: 0;
    width: 100%;
  }

  blockquote {
    color: var(--color-white);
    border-left: 0.3rem solid ${props => props.color};
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }

  hr {
    border: 1px solid ${props => props.color};
    margin: 3rem auto;
  }

  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }

  h1 {
    font-size: 2.8rem;
  }

  h2 {
    font-size: 2.1rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  h4 {
    font-size: 1.4rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  strong {
    font-weight: 700;
  }

  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }

  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;

    &.lazyload {
      opacity: 0;
    }

    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }

  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;
  }

  .instagram-media {
    margin: 1rem auto !important;
  }

  a {
    border-bottom: 2px dashed ${props => props.color};
    color: ${props => props.color};
    text-decoration: none;
    transition: opacity 0.5s;

    svg {
      color: ${props => props.color};
    }

    &:hover {
      opacity: 0.8;
    }
  }
`
