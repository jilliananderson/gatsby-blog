import React from "react";
import styled from "@emotion/styled";
import { useStaticQuery, Link, graphql } from "gatsby";
import { rhythm } from "../utils/typography";

const OuterWrapper = styled.div`
  width: 100%;
  height: 100%;
  font-family: Helvetica, sans-serif;
`;

const NavWrapper = styled.div`
  background-color: #7710dd;
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
    text-shadow: 0 0 5px;
  }
`;

const InnerLink = styled(Link)`
  text-decoration: none;
  color: #dadfe1;
`;

const MainContentWrapper = styled.div`
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
