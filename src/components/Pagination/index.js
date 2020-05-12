import React from "react"
import * as S from "./styled"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import propTypes from "prop-types"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && (
      <AniLink to={prevPage} cover direction="left" bg="#262235" duration={0.6}>
        &larr; previous page
      </AniLink>
    )}
    <p>
      {currentPage} of {numPages}
    </p>
    {!isLast && (
      <AniLink
        to={nextPage}
        cover
        direction="right"
        bg="#262235"
        duration={0.6}
      >
        next page &rarr;
      </AniLink>
    )}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination
