import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import { Link } from "gatsby";

const Hero = styled.div`
  background-image: url(/jillianblogs_hero_img.jpg);
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

const HeroText = styled.h1`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const NavWrapper = styled.div`
  background-color: #ff80c1;
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
    background-color: #ffe6f3;
  }
`;

const InnerLink = styled(Link)`
  text-decoration: none;
  color: #2e343b;
`;

const MainContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding: 2.5rem;
  padding-top: 2.1rem;
  text-align: center;
  color: #2e343b;
  height: 100%;
`;

const NavListItem = props => (
  <StyledLink tabindex="0">
    <InnerLink to={props.to}>{props.children}</InnerLink>
  </StyledLink>
);

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        body {
          background: #ffe6f3;
          font-family: Helvetica, sans-serif;
          margin: 0;
          padding: 0;
          min-height: "100vh";
          max-width: "100vw";
        }
      `}
    />
    <Hero>
      <HeroText>JILLIANBLOGS</HeroText>
    </Hero>
    <NavWrapper>
      <NavList>
        <NavListItem to="/">home</NavListItem>
        <NavListItem to="/about">about</NavListItem>
      </NavList>
    </NavWrapper>
    <MainContentWrapper>{children}</MainContentWrapper>
  </>
);

export default Layout;
