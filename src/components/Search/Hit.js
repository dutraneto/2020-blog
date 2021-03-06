import React from "react"
import PostItem from "../PostItem"

const Hit = ({ hit }) => {
  return (
    <PostItem
      slug={hit.fields.slug}
      color={hit.color}
      title={hit.title}
      date={hit.date}
      description={hit.description}
      category={hit.category}
    />
  )
}

export default Hit
