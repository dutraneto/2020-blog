import React from "react"
// import propTypes from "prop-types"
import * as S from "./styled"

const RecommendedPosts = ({ next, previous }) => (
  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedLink
        to={previous.fields.slug}
        className={previous}
        color={previous.frontmatter.color}
      >
        {previous.frontmatter.title}
      </S.RecommendedLink>
    )}
    {next && (
      <S.RecommendedLink
        to={next.fields.slug}
        className={next}
        color={next.frontmatter.color}
      >
        {next.frontmatter.title}
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
)

// RecommendedPosts.propTypes = {
//   next: propTypes.shape({
//     frontmatter: propTypes.shape({
//       title: propTypes.String.isRequired,
//       color: propTypes.String.isRequired,
//     }),
//     fields: propTypes.shape({
//       slug: propTypes.String.isRequired,
//     }),
//   }),
//   previous: propTypes.shape({
//     frontmatter: propTypes.shape({
//       title: propTypes.String.isRequired,
//       color: propTypes.String.isRequired,
//     }),
//     fields: propTypes.shape({
//       slug: propTypes.String.isRequired,
//     }),
//   }),
// }

export default RecommendedPosts
