import React from "react";
import styled from "@emotion/styled";

const StyledSubHeader = styled.h3`
  font-family: Helvetica, sans-serif;
  color: #2e343b;
`;

const Subheader = props => {
  return <StyledSubHeader>{props.children}</StyledSubHeader>;
};

export default Subheader;
