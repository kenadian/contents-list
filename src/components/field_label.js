import React from "react";
import styled from "styled-components";
const StyledLabel = styled.label`
  @media (device-width: 411px) and (device-height: 731px) {
    font-size: 0.75rem;
    line-height: 1.25rem;
  }
  @media (min-width: 412px) {
    line-height: 1.65rem;
  }
`;
function FieldLabel(props) {
  return <StyledLabel htmlFor={props.name}>{props.children}</StyledLabel>;
}
export default FieldLabel;
