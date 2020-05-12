// Design query for posting
import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as S from "../components/Post/styled"
import RecommendedPosts from "../components/RecommendedPosts"
import Comments from "../components/Comments"

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      ></SEO>
      <S.PostHeader>
        <S.PostDate color={post.frontmatter.color}>
          {post.frontmatter.date} &bull; {post.timeToRead} min to read
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent color={post.frontmatter.color}>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>
      <RecommendedPosts next={next} previous={previous} />
      <Comments
        url={post.fields.slug}
        title={post.frontmatter.title}
        color={post.frontmatter.color}
      />
    </Layout>
  )
}

// A pure graphql query
export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        color
        image
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
