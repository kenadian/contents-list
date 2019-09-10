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

const LabelledSelectField = ({
  order,
  width,
  children,
  name,
  id,
  value,
  onChange,
  category
}) => {
  const categoryIds = Object.keys(category);

  return (
    <Wrapper order={order} width={width}>
      <FieldLabel htmlFor="categoryId">{children}</FieldLabel>
      <StyledSelect name={name} id={id} value={value} onChange={onChange}>
        <option value="0">Select...</option>
        {categoryIds.map(value => {
          return (
            <option key={value} value={value}>
              {category[value].name}
            </option>
          );
        })}
      </StyledSelect>
    </Wrapper>
  );
};
export default LabelledSelectField;
