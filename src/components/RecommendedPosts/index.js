import React from "react"
import PropTypes from "prop-types"
import * as S from "./styled"

const RecommendedPosts = ({ next, previous }) => (
  <S.RecommendedWrapper>
    {console.log(previous, next)}
    {previous && (
      <S.RecommendedLink
        to={previous.fields.slug}
        className="previous"
        color={previous.frontmatter.color}
      >
        {previous.frontmatter.title}
      </S.RecommendedLink>
    )}
    {next && (
      <S.RecommendedLink
        to={next.fields.slug}
        className="next"
        color={next.frontmatter.color}
      >
        {next.frontmatter.title}
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
)

RecommendedPosts.propTypes = {
  next: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
  previous: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPosts
