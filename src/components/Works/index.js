import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import * as S from "./styled"

const WorksImg = ({ imageSrc }) => {
  const { images } = useStaticQuery(
    graphql`
      query {
        images: allFile(filter: { sourceInstanceName: { eq: "works" } }) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )

  const image = images.edges.find(image => {
    return image.node.relativePath === imageSrc.relativePath
  })

  return <S.Image fluid={image.node.childImageSharp.fluid} />
}

const Works = props => {
  const { content } = props
  console.log(content)
  return (
    <S.CardWorkList>
      {content.map(({ node }) => {
        return (
          <S.CardWorkLink key={node.id} href={node.path} title={node.title}>
            <S.CardWork>
              <WorksImg imageSrc={node.imageSrc} />
              <S.DateTime>{node.date}</S.DateTime>
              <S.Title>{node.title}</S.Title>
              <S.Text>{node.description}</S.Text>
            </S.CardWork>
          </S.CardWorkLink>
        )
      })}
    </S.CardWorkList>
  )
}

export default Works
