import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Works from "../components/Works"

const worksJsonQuery = graphql`
  query {
    allWorksJson {
      edges {
        node {
          date
          description
          id
          path
          title
          imageSrc {
            relativePath
          }
        }
      }
    }
  }
`

const WorksPage = () => {
  
  const data = useStaticQuery(worksJsonQuery)
  const content = data.allWorksJson.edges

  return (
    <Layout>
      <SEO title="works" />
      <Works content={content} />
    </Layout>
  )
}

export default WorksPage
