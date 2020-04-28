import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "avatar.jpg" }) {
          childImageSharp {
            fixed(width: 90, height: 90) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  return (
    <S.AvatarWrapper>
      <S.Avatar fixed={avatarImage.childImageSharp.fixed} />
    </S.AvatarWrapper>
  )
}

export default Avatar
