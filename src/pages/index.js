import React from "react";
import styled from "@emotion/styled";
// import { graphql } from "gatsby";
import Header from "../components/header";
import Layout from "../components/layout";

const headerText = "Posts by Topic";

const TopicWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FakePolaroid = styled.div`
  background-color: white;
  height: 30vw;
  width: 30vw;
  margin: 12px;
`;

// TODOS:
// - make each topic a clickable link
// - on the pages created, sort for posts by topic
// - could perhaps review all the topics in data and make a new set
// - but could NOT map over them as some posts in the future may have multiple tags

export default () => {
  return (
    <Layout>
      <>
        <Header headerText={headerText} />
        <br />
        <TopicWrapper>
          <FakePolaroid> Travel</FakePolaroid>
          <FakePolaroid> Software Development</FakePolaroid>
          <FakePolaroid> Other shit</FakePolaroid>
        </TopicWrapper>
      </>
    </Layout>
  );
};
// export const query = graphql`
//   query {
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//           }
//           fields {
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `;
