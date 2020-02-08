import React from "react";
import { css } from "@emotion/core";
import { Link, graphql } from "gatsby";
import { rhythm } from "../utils/typography";
import Header from "../components/header";
import Subheader from "../components/subheader";
import Layout from "../components/layout";

const headerText = "Unordered List of Posts";

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <Header headerText={headerText} />
        <Subheader>{data.allMarkdownRemark.totalCount} Posts</Subheader>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: black;
              `}
            >
              <Subheader
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                  font-family: Helvetica, sans-serif;
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: black;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </Subheader>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
