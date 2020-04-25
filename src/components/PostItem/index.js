import React from "react"
import PropTypes from "prop-types"
import * as S from "./styled"

const PostItem = ({
  slug,
  color,
  category,
  date,
  timeToRead,
  title,
  description,
}) => {
  const TagName = category
  return (
    <S.PostItemLink
      to={slug}
      color={color}
    >
      <S.PostItemWrapper>
        <S.PostItemTag color={color}>
          <TagName />
        </S.PostItemTag>
        <S.PostItemInfo>
          <S.PostItemDate>
            {date} &bull; {timeToRead} min de leitura
          </S.PostItemDate>
          <S.PostItemTitle>{title}</S.PostItemTitle>
          <S.PostItemDescription>{description}</S.PostItemDescription>
        </S.PostItemInfo>
      </S.PostItemWrapper>
    </S.PostItemLink>
  )
}

// Object defines type of each prop
PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem
