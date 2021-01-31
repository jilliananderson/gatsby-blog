import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layout";

const SectionTitle = styled.h2`
  font-family: Helvetica, sans-serif;
  color: #2e343b;
`;

const SectionContent = styled.p`
  font-size: 16px;
  line-height: 23px;
`;

export default () => {
  const CurrentBookTitle = "The Subtle Art of Not Giving a Fuck";
  const CurrentBookAuthor = "Mark Manson";
  const CurrentlyListening = "Spotify's 'Calm Down' Playlist";
  const CurrentProjects =
    "This website, learning NodeJS, and perhaps some actual content for this blog?";

  return (
    <Layout>
      <>
        <SectionTitle>Right meow, I'm reading...</SectionTitle>
        <SectionContent>
          {CurrentBookTitle} by {CurrentBookAuthor}
        </SectionContent>
        <SectionTitle>I'm listening to...</SectionTitle>
        <SectionContent>{CurrentlyListening}</SectionContent>
        <SectionTitle>And I'm working on...</SectionTitle>
        <SectionContent>{CurrentProjects}</SectionContent>
      </>
    </Layout>
  );
};
