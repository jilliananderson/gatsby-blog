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
`;

const BioWrapper = styled.div`
  font-size: 16px;
  line-height: 23px;
  color: #2e343b;
`;

const About = ({ data }) => {
  const headerText = "about " + data.site.siteMetadata.title;
  return (
    <Layout>
      <>
        <Header headerText={headerText} />
        <RoundImage
          src="/jillianwithbeer.jpg"
          alt="Author enjoying a tall beer"
        />
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
            American as Berlin will allow{" "}
            <span role="img" aria-label="peace sign emoji">
              ✌️
            </span>
          </SocialQuote>
          <SocialQuote>OK but is there gonna be food</SocialQuote>
          <p style={{ marginBottom: "2em" }}>
            You can take your pick, or read a little more{" "}
            <span role="img" aria-label="arrow pointing down emoji">
              ⬇️
            </span>
          </p>
          <p>
            I'm a product of the Midwest US, but in the last few years I've
            lived in Barcelona and, more recently, Berlin. In college in
            Minnesota, I studied Spanish and Psychology with a focus on
            neuroscience, but considering the job market it should be no
            surprise that I wound up in a completely unrelated field (insurance)
            <span role="img" aria-label="woman shrugging emoji">
              🤷🏻‍♀️
            </span>
          </p>
          <p>
            After moving to Europe, I had the unique opportunity to redefine my
            career path. I chose to cultivate a new set of skills and become a
            web developer. I've been a software developer for about a year and a
            half now, and I'm still thrilled with my choice to make the switch
            <span role="img" aria-label="sparkle emoji">
              ✨
            </span>
          </p>
          <p>
            There is one thing I would change if I could, though: diversity and
            inclusion in the tech world is dismal (at best) and the (infrequent)
            conversations around these problems are disappointingly shallow. The
            more I see this problem, the more passionate I become about doing my
            small part to correct the imbalances. I am always ready to encourage
            and empower members of underrepresented groups to enter and become
            successful in the tech industry, and I am committed to using
            whatever leverage and/or platform I have to make it a more inclusive
            and welcoming space.
          </p>
          <p>
            My other passions: rock climbing, public speaking (yes, really),
            checking out hipster coffee spots, trying to cook meals that are
            better than merely edible, and traveling as much as my schedule
            allows.
          </p>
        </BioWrapper>
      </>
    </Layout>
  );
};

export default About;
