import React from "react"
import ReactDisqusComments from "react-disqus-comments"

import * as S from "./styled"
import { PropTypes } from "prop-types"

const Comments = ({ url, title, color }) => {
  const completeURL = `https://dutraneto.com${url}`
  return (
    <S.CommentsWrapper color={color}>
      <S.CommentsTitle>Comments</S.CommentsTitle>
      <ReactDisqusComments
        shortname="dutraneto"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments
