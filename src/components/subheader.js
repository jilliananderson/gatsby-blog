import React from "react";
import styled from "@emotion/styled";

const StyledHeader = styled.h3`
  font-family: Helvetica, sans-serif;
`;

const Subheader = props => {
  return <StyledHeader>{props.children}</StyledHeader>;
};

export default Subheader;
