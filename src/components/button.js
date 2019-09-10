import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1.3rem;
  margin-left: 16px;
  background: ${props => {
    return props.primary ? "#ffc240" : "#ffffff";
  }};
  border: none;
`;

const Button = ({ dataid, onClick, name, id, primary, children }) => {
  return (
    <StyledButton
      name={name}
      id={id}
      data-id={dataid}
      onClick={onClick}
      primary={primary}
    >
      {children}
    </StyledButton>
  );
};
export default Button;
