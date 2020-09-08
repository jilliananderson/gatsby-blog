import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const OuterWrapper = styled.div`
  width: 100%;
  height: 100%;
  font-family: Helvetica, sans-serif;
`;

const NavWrapper = styled.div`
  background-color: #33ffba;
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
  padding: 1rem 2rem;
  margin-bottom: 0;
  :hover,
  :focus {
    background-color: #47ebb3;
    cursor: pointer;
  }
`;

const InnerLink = styled(Link)`
  text-decoration: none;
  color: #2e343b;
`;

const MainContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding: 3rem;
  padding-top: 2rem;
  text-align: center;
  color: #2e343b;
`;

const NavListItem = props => (
  <StyledLink tabindex="0">
    <InnerLink to={props.to}>{props.children}</InnerLink>
  </StyledLink>
);

const Layout = ({ children }) => {
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
