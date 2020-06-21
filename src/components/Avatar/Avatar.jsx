import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "avatar-suit.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 90) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )
  return (
    <S.AvatarWrapper>
      <S.Avatar fluid={avatarImage.childImageSharp.fluid} />
    </S.AvatarWrapper>
  )
}

export default Avatar
