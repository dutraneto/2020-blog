import React from "react"
// import { StaticQuery, graphql } from "gatsby"
// using useStaticQuery
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar/Avatar"
// import styled
import * as S from "./styled"

const Profile = () => {
  const data = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          author
          position
        }
      }
    }
  `)
  return (
    <S.ProfileWrapper>
      <S.ProfileLink>
        <Avatar />
        <S.ProfileAuthor>{data.site.siteMetadata.author}</S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfilePosition>{data.site.siteMetadata.position}</S.ProfilePosition>
    </S.ProfileWrapper>
  )
}

/*

const Profile = () => (
  // Using StaticQuery from gatsby
  <StaticQuery
    query={graphql`
      query MySiteMetadata {
        site {
          siteMetadata {
            title
            author
            description
            position
          }
        }
      }
    `}
    // render={data => (
    //   <div className="Profile-wrapper">
    //     <h1>{data.site.siteMetadata.title}</h1>
    //     <p>{data.site.siteMetadata.description}</p>
    //     <p>{data.site.siteMetadata.author}</p>
    //     <h2>{data.site.siteMetadata.position}</h2>
    //   </div>
    // )}

    // using destructure
    render={({
      site: {
        siteMetadata: { title, author, description, position },
      },
    }) => (
      <div className="Profile-wrapper">
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{author}</p>
        <h2>{position}</h2>
      </div>
    )}
  />
)
*/
export default Profile
