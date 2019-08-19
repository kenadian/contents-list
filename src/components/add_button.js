import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  @media (device-width: 411px) and (device-height: 731px) {
    align-self: flex-end;
    font-size: 1rem;
    order: ${props => props.order};
    padding: 5px;
    margin-bottom: 10px;
    color: white;
    flex: 0 0 20%;
  }
  @media (min-width: 412px) {
    ]align-self: center;
    width: 10%;
    font-size: 1.3rem;
    padding: 5px;
    margin-top: 10px;
  }
  border-width: 1px;
  background: #ffc240;
  font-weight: bold;
  color: white;
`;

function AddButton(props) {
  return (
    <StyledButton
      order={props.order}
      name="add-btn"
      id="add-btn"
      onClick={props.onClick}
    >
      {props.children}
    </StyledButton>
  );
}
export default AddButton;
