import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
// using useStaticQuery
import Avatar from "../Avatar/Avatar"
// import styled
import * as S from "./styled"

const Profile = ({ author, position, isMobileHeader }) => {
  return (
    <S.ProfileWrapper isMobileHeader={isMobileHeader}>
      <S.ProfileLink to="/" cover direction="left" bg="#262235" duration={0.6}>
        <Avatar />
        <div>
          <S.ProfileAuthor>{author}</S.ProfileAuthor>
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </div>
      </S.ProfileLink>
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

Profile.propTypes = {
  author: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
}

export default Profile
