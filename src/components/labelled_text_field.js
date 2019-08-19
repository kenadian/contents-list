import React from "react";
import styled from "styled-components";

import FieldLabel from "./field_label";
const Wrapper = styled.div`
  @media (device-width: 411px) and (device-height: 731px) {
    flex: 0 1 25%;
    width: 25%;
    order: ${props => props.order};
  }
  @media (min-width: 412px) {
    width: 25%;
  }

  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  flex: 1;
  align-self: stretch;
  border-width: 1px;
  border-color: rgb(77, 77, 79);
  padding: 5px;
`;
function LabelledTextField(props) {
  return (
    <Wrapper order={props.order}>
      <FieldLabel htmlFor={props.name}>{props.children}</FieldLabel>
      <StyledInput
        id={props.id}
        name={props.name}
        type={props.type || "text"}
        autoFocus={props.autoFocus || false}
        value={props.value || ""}
        onChange={props.onChange}
      />
    </Wrapper>
  );
}
export default LabelledTextField;
