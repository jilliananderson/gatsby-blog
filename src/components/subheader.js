import React from "react";
import styled from "@emotion/styled";

const StyledSubHeader = styled.h2`
  font-family: Helvetica, sans-serif;
  color: #2e343b;
  margin: 0;
`;

const Subheader = props => {
  return <StyledSubHeader>{props.children}</StyledSubHeader>;
};

export default Subheader;
