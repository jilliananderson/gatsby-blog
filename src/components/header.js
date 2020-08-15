import React from "react";
import styled from "@emotion/styled";

const StyledHeader = styled.h1`
  font-family: Helvetica, sans-serif;
  color: #2e343b;
`;

const Header = props => {
  return <StyledHeader>{props.headerText}</StyledHeader>;
};

export default Header;
