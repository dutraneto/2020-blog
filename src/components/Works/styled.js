import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const CardWorkList = styled.section`
  margin: auto;
  width: 45rem;
  padding: 5rem 0 0;
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

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
  transition: color 0.5s;
  margin-top: 1rem;
  display: block;

  &:not(:last-item) {
    margin-bottom: 1rem;
  }

  &:hover {
    border: 1px solid #03edf9;
  }
`

export const CardWork = styled.article`
  padding: 2rem;
  min-height: 15rem;
  width: 100%;
  border-radius: 2px;
`

export const Image = styled(Img).attrs(props => ({
  alt: props.title,
}))`
  display: block;
  margin-bottom: 20px;
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
