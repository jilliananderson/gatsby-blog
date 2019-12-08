import React from "react";
import { Link, graphql } from "gatsby";
import Header from "../components/header";
import Layout from "../components/layout";

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const About = ({ data }) => {
  const headerText = "About " + data.site.siteMetadata.title;
  return (
    <Layout>
      <div>
        <Header headerText={headerText} />
        <Link to="/">Home</Link>
        <div>This is the about page.</div>
      </div>
    </Layout>
  );
};

export default About;
