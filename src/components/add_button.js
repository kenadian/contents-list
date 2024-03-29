import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  @media (device-width: 411px) and (device-height: 731px) {
    font-size: 1rem;
    order: ${props => props.order};
    height: 25px;
    margin: 5px 5px 10px;
    width: 50px;
  }
  @media (min-width: 412px) {
    font-size: 1.3rem;
    align-self: center;
    width: 10%;
    padding: 5px;
    margin-top: 10px;
  }
  background: #ffc240;
  font-weight: bold;
  color: white;
`;

function AddButton(props) {
  return (
    <StyledButton
      order={props.order}
      onClick={props.onClick || null}
      name="add-btn"
      id="add-btn"
    >
      {props.children}
    </StyledButton>
  );
}
export default AddButton;
