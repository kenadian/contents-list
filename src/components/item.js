import React from "react";
import styled from "styled-components";

import Currency from "./currency";

const Wrapper = styled.div`
  @media (min-width: 412px) {
    margin-left: 30px;
    align-items: center;
    :hover {
      background-color: #e8e8e8;
    }
  }
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
`;
const Name = styled.div`
  flex: 1;
`;
const Amount = styled.div`
  flex: 0;
`;
const Button = styled.button`
  @media (min-width: 412px) {
    font-size: 1.3rem;
    margin-left: 16px;
    background-color: #ffffff;
    border: none;
  }
  color: red;
`;
function Item(props) {
  return (
    <Wrapper>
      <Name>{props.name}</Name>{" "}
      <Amount>
        <Currency value={props.amount} />
      </Amount>
      <Button
        name="remove-btn"
        id="remove-btn"
        data-id={props.itemId}
        onClick={props.handleRemove}
      >
        Remove
      </Button>
    </Wrapper>
  );
}

export default Item;
