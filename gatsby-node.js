// require path
const path = require("path")
// Add slug field to each post
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      //   Get the slug name after the date
      value: `/${slug.slice(12)}`,
    })
  }
}

exports.createPages = ({ graphql, action }) => {
  const { createPages } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({node}) => {
          createPage({
              path: node.fields.slug,
              component: path.resolve("./src/templates/blog-post.js"),
              context: {
                  slug: node.fields.slug
              }
          })
      })
  })
}
