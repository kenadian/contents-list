import React from "react";
import styled from "styled-components";

import FieldLabel from "./field_label";

const Wrapper = styled.div`
  @media (device-width: 411px) and (device-height: 731px) {
    width: ${props => props.width || "auto"};
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
  border-width: 1px;
  border-color: rgb(77, 77, 79);
  padding: 5px;
`;

const LabelledTextField = ({
  order,
  width,
  name,
  children,
  id,
  type,
  autoFocus,
  value,
  onChange
}) => {
  return (
    <Wrapper order={order} width={width}>
      <FieldLabel htmlFor={name}>{children}</FieldLabel>
      <StyledInput
        id={id}
        name={name}
        type={type || "text"}
        autoFocus={autoFocus || false}
        value={value || ""}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default LabelledTextField;
