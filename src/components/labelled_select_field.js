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
  margin: 0px 5px 10px;
`;

const StyledSelect = styled.select`
  order: ${props => props.order};
  border-width: 1px;
  border-color: rgb(77, 77, 79);
  padding: 5px;
  -webkit-appearance: button;
  -moz-appearance: button;
`;

function LabelledSelectField(props) {
  return (
    <Wrapper order={props.order} width={props.width}>
      <FieldLabel htmlFor="categoryId">{props.children}</FieldLabel>
      <StyledSelect
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      >
        <option value="0">Select...</option>
        <option value="1">Jewellery</option>
        <option value="2">Collectibles</option>
        <option value="3">Musical Instruments</option>
        <option value="4">Sports Equipment</option>
        <option value="5">Tools</option>
      </StyledSelect>
    </Wrapper>
  );
}
export default LabelledSelectField;
