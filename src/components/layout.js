import React from "react";
import styled from "@emotion/styled";
import { useStaticQuery, Link, graphql } from "gatsby";
import { rhythm } from "../utils/typography";

const OuterWrapper = styled.div`
  background-color: rgb(255, 147, 150);
  width: 100%;
  height: 100%;
  font-family: Helvetica, sans-serif;
`;

const Hero = styled.div`
  background-image: url(/mountainsky.jpg);
  height: 40vh;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media screen and (max-width: 450px) {
    display: none;
  }
`;

const NavWrapper = styled.div`
  background-color: rgb(3, 42, 68);
  margin: 0;
  position: sticky;
  top: 0;
`;

const NavList = styled.ul`
  margin: 0;
  line-height: 1;
  text-align: center;
  font-size: 1.3rem;
`;

const StyledLink = styled.li`
  display: inline-block;
  margin: 1rem 2rem;

  :hover {
    text-shadow: 0 0 5px rgb(255, 147, 150);
  }
`;

const InnerLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const MainContentWrapper = styled.div`
  background-color: white;
  margin: 0 auto;
  max-width: 700px;
  padding: ${rhythm(2)};
  padding-top: ${rhythm(1.5)};
  text-align: center;
`;

const NavListItem = props => (
  <StyledLink>
    <InnerLink to={props.to}>{props.children}</InnerLink>
  </StyledLink>
);

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <OuterWrapper>
      <Hero></Hero>
      <NavWrapper>
        <NavList>
          <NavListItem to="/">Blog</NavListItem>
          <NavListItem to="/about/">About</NavListItem>
        </NavList>
      </NavWrapper>
      <MainContentWrapper>{children}</MainContentWrapper>
    </OuterWrapper>
  );
};

export default Layout;
