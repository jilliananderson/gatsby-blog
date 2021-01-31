import React from "react";
import styled from "@emotion/styled";
import { Link, graphql } from "gatsby";
import Header from "../components/header";
import Subheader from "../components/subheader";
import Layout from "../components/layout";

const headerText = "Unordered List of Posts";

const StyledExcerpt = styled.p`
  color: #2e343b;
  font-size: 16px;
  line-height: 23px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledDetails = styled.p`
  color: #2e343b;
  font-size: 18px;
`;

export default ({ data }) => {
  return (
    <Layout>
      <>
        <Header headerText={headerText} />
        <br />
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <StyledLink to={node.fields.slug}>
              <Subheader>{node.frontmatter.title}</Subheader>
              <StyledDetails>Date: {node.frontmatter.date}</StyledDetails>
              {node.frontmatter.topics && (
                <StyledDetails>Topics: {node.frontmatter.topics}</StyledDetails>
              )}
              <StyledExcerpt>{node.excerpt}</StyledExcerpt>
            </StyledLink>
          </div>
        ))}
      </>
    </Layout>
  );
};
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            topics
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
