import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const CardWorkList = styled.section`
  margin: auto;
  width: 45rem;
  padding: 5rem 0 0;

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

export const CardWorkLink = styled.a.attrs(props => ({
  href: props.href,
  title: props.title,
  target: "_blank",
  rel: "noopener noreferrer",
}))`
  color: var(--color-white);
  text-decoration: none;
  transition: all 0.4s;
  display: block;
  /* padding: 1rem; */

  &:hover {
    /* outline: 3px solid #03edf9; */
  }
`

export const CardWork = styled.article`
  /* padding: 2rem; */
  /* min-height: 15rem; */
  overflow: hidden;
  width: 100%;
  border-radius: 2px;
`

export const Image = styled(Img).attrs(props => ({
  alt: props.title,
}))`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 20px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`

export const Title = styled.h1`
  font-size: 2.1rem;
`

export const Text = styled.p`
  font-size: 2rem;
`

export const DateTime = styled.time`
  /* color: var(--secondaryColor); */
  display: block;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
`
