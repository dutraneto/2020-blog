import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "styled-components"

const ColorH1 = styled.h1`
  color: #15b04b;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ColorH1>
      <h1>Home</h1>
    </ColorH1>
  </Layout>
)

export default IndexPage
