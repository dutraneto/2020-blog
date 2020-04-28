import styled from "styled-components"
import Img from "gatsby-image"

export const AvatarWrapper = styled.div`
  margin: 0 auto;
  border-radius: 50%;
  height: 5.625rem;
  width: 5.625rem;
  background: #161716;
  box-shadow: 5px 5px 10px #0f0f0f, -5px -5px 10px #1d1f1d;
`

export const Avatar = styled(Img)`
  border-radius: 50%;
  height: 3.75rem;
  margin: auto;
  width: 3.75rem;
  display: inline;
  margin-top: 0.25rem;
`
