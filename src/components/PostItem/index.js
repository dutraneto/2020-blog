import React from "react"
import PropTypes from "prop-types"
import * as S from "./styled"
import Icons from "./icons"

const PostItem = ({
  slug,
  color,
  category,
  date,
  timeToRead,
  title,
  description,
}) => {
  const TagIcon = category === "Misc" ? Icons.Blog : Icons[category]
  return (
    <S.PostItemLink
      cover
      direction="right"
      bg="#2a2139"
      duration={0.6}
      to={slug}
      color={color}
    >
      <S.PostItemWrapper>
        <S.PostItemTag color={color}>
          <TagIcon />
        </S.PostItemTag>
        <S.PostItemInfo>
          <S.PostItemDate>
            {date} &bull; {timeToRead} min to read
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
  category: PropTypes.string,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem
