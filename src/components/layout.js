import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import { Link } from "gatsby";

const Hero = styled.div`
  background-image: url(/jillianblogs_hero_img.jpg);
  height: 40vh;
  min-height: 270px;
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
  font-size: 3rem;
  font-family: Didot;
  font-weight: 900;
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
  text-align: right;
  font-size: 1.2rem;
`;

const StyledLink = styled.li`
  display: inline-block;
  padding: 12px;
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

// TODO review mobile view
const MainContentWrapper = styled.div`
  margin: 0 auto;
  width: 65%;
  padding: 2.5rem;
  padding-top: 2.1rem;
  text-align: center;
  color: #2e343b;
  height: 100%;
`;

// TODO make this one component for readability
// and to make the entire area clickable
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
        <NavListItem to="/">🏡home sweet home</NavListItem>
        <NavListItem to="/now">😸right meow</NavListItem>
        <NavListItem to="/blogs">👉to the blogs!</NavListItem>
        <NavListItem to="/about">🤔who is Jillian?</NavListItem>
      </NavList>
    </NavWrapper>
    <MainContentWrapper>{children}</MainContentWrapper>
  </>
);

export default Layout;
