import { Link, StaticQuery, graphql } from 'gatsby';
import React from 'react';

const LISTING_QUERY = graphql`
    query ListingQuery {
        allMarkdownRemark(limit: 10, sort: {
        order: DESC,
        fields: [frontmatter___date]
        }) {
        edges {
            node {
                excerpt
                frontmatter {
                    date
                    title
                    slug
                }
            }
        }
        }
    }
`

const Listing = () => (
    <StaticQuery query={LISTING_QUERY} render={({allMarkdownRemark}) => (
        allMarkdownRemark.edges.map((edge) => {
            return (
                <article>
                    <Link to={`/posts${edge.node.frontmatter.slug}`}><h2>{edge.node.frontmatter.title}</h2></Link>
                    <p>{edge.node.frontmatter.date}</p>
                    <p>{edge.node.excerpt}</p>
                    <Link to={`/posts${edge.node.frontmatter.slug}`}>Read More</Link>
                </article>
            )
        })
    )} />
);

export default Listing;