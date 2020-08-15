import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
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

const RoundImage = styled.img`
  border-radius: 100%;
  height: 150px;
  width: 150px;
`;

const SocialQuote = styled.p`
  font-style: italic;
  font-size: 0.9em;
`;

const BioWrapper = styled.div`
  font-size: 16px;
`;

const About = ({ data }) => {
  const headerText = "about " + data.site.siteMetadata.title;
  return (
    <Layout>
      <div>
        <Header headerText={headerText} />
        <RoundImage src="/jillianwithbeer.jpg" />
        <BioWrapper>
          <p>
            Hi, my name is Jillian, aka the person writing the blogs (thus
            "jillianblogs"--creative, right?). Depending on your preference of
            social media, my bio could contain any of the following:
          </p>
          <SocialQuote>
            I rarely take pictures of food; by the time I think of it, I've
            already finished eating. Priorities, you know?
          </SocialQuote>
          <SocialQuote>
            halfway-hipster techie expat, hell-bent on being as stereotypically
            American as Berlin will allow✌🏻
          </SocialQuote>
          <SocialQuote>OK but is there gonna be food</SocialQuote>
          <p>You can take your pick, or read a little more ⬇️</p>
          <p>
            I'm a product of the Midwest US, but in the last few years I've
            lived in Barcelona and, more recently, Berlin. In college in
            Minnesota, I studied Spanish and Psychology with a focus on
            neuroscience, but considering the job market it should be no
            surprise that I wound up in a completely unrelated field (insurance)
            🤷🏻‍♀️
          </p>
          <p>
            After moving to Europe, I had the unique opportunity to redefine my
            career path. I chose to cultivate a new set of skills and become a
            web developer. I've been a software developer for about a year and a
            half now, and I'm still thrilled with my choice to make the switch
            ✨
          </p>
          <p>
            My only complaint? Diversity and inclusion in the tech world could
            use some improvement. I've become passionate about encouraging and
            empowering other women to enter into and succeed in the industry.
          </p>
          <p>
            My other passions: rock climbing, public speaking (yes, really),
            checking out hipster coffee spots, trying to cook meals that are
            better than merely edible, and traveling as much as my schedule
            allows.
          </p>
        </BioWrapper>
      </div>
    </Layout>
  );
};

export default About;
