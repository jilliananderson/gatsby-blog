import React from "react";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const PostTitle = styled.h1`
  font-family: Helvetica, sans-serif;
  color: #2e343b;
`;

const PostContent = styled.div`
  font-size: 16px;
  line-height: 23px;
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </>
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
