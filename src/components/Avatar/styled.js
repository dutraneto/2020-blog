import styled from "styled-components"
import Img from "gatsby-image"

export const AvatarWrapper = styled.div`
  margin: 0 auto;
  border-radius: 50%;
  height: 5.625rem;
  width: 5.625rem;
`

export const Avatar = styled(Img)`
  border-radius: 50%;
  height: 3.75rem;
  margin: auto;
  width: 3.75rem;
  display: inline;
  margin-top: 0.25rem;
`
