import React, {Fragment} from 'react'
import { StaticQuery, graphql } from 'gatsby'

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(limit: 5, sort: {
      order: DESC,
      fields: [frontmatter___date]
    }) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`


const Archive = ({ children }) => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render ={({allMarkdownRemark}) => {
      return (
        <Fragment>
          <aside>
            <h2>Archive</h2>  
            {allMarkdownRemark.edges.map((edge) => {
              return (
                <li><a href={`/posts${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}</a></li>
              )
            })}
          </aside>
        </Fragment>
      )
      
    }}
  />
)


export default Archive
