import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const AvatarWrapper = styled.div`
  margin: 0 auto;
  border-radius: 50%;
  height: 5.625rem;
  width: 5.625rem;

  ${media.lessThan("large")`
    max-height: 2.5rem;
    max-width: 2.5rem;
  `}
`

export const Avatar = styled(Img)`
  border-radius: 50%;
  height: 5.625rem;
  margin: auto;
  width: 5.625rem;
  margin-top: 0.25rem;

  ${media.lessThan("large")`
    max-height: 2.5rem;
    max-width: 2.5rem;
    margin-top: 0;
  `}
`
