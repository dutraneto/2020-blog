import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const CardWorkList = styled.section`
  margin: auto;
  /* width: 45rem; */
  padding: 10rem;

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

export const CardWork = styled.article`
  width: 100%;
  border-radius: 2px;
  margin-bottom: 3rem;
  color: var(--color-white);
  border: 1px solid red;
  padding: 1rem;
  overflow: hidden;
`

export const CardWorkLink = styled.a.attrs(props => ({
  href: props.href,
  title: props.title,
  target: "_blank",
  rel: "noopener noreferrer",
}))`
  text-decoration: none;
  transition: all 0.4s;
  display: block;
  margin-bottom: 2rem;
`

export const Image = styled(Img).attrs(props => ({
  alt: props.title,
}))`
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`

export const Title = styled.h2`
  font-size: 2.1rem;
  margin-bottom: 0.5rem;
`

export const Text = styled.p`
  font-size: 1.6rem;
`

export const DateTime = styled.time`
  text-align: end;
  display: block;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
`
