import React from "react";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const PostTitle = styled.h1`
  font-family: Helvetica, sans-serif;
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
