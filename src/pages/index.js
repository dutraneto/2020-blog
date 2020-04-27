import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"

// import { Css3 } from "@styled-icons/boxicons-logos/Css3"

import PostItem from "../components/PostItem"

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              category
              color
              date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
              description
              title
            }
            timeToRead
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const postList = allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(
        ({
          node: {
            frontmatter: { category, color, date, title, description },
            timeToRead,
            fields: { slug },
          },
        }) => (
          <PostItem
            slug={slug}
            color={color}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        )
      )}
    </Layout>
  )
}

export default IndexPage
