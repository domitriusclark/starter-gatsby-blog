import React, { Component } from 'react';
import Layout from './layout';

import { graphql } from 'gatsby';

export default class postLayout extends Component {

    render() {
        const { markdownRemark } = this.props.data;
        const { title } = markdownRemark.frontmatter;

        return (
            <Layout>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{
                    __html: markdownRemark.html
                }} />
            </Layout>
        )
    }
}

export const query = graphql`
    query PostQuery($slug: String!) {
        markdownRemark(frontmatter: {
            slug: {
                eq: $slug
            }
        }) {
            html 
            frontmatter {
                title
                date
                slug
            }
        }
    }
`