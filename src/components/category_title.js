import React from "react";
import styled from "styled-components";
import Currency from "./currency";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  padding: 0px 0 5px 0;
  margin-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #5cba47;
  border-bottom-style: solid;
  max-width: 1000px;
  @media (min-width: 412px) {
    font-size: 1.9rem;
  }
  @media (device-width: 411px) and (device-height: 731px) {
    font-size: 1.3rem;
  }
`;
const Name = styled.div`
  font-weight: bold;
  color: #5cba47;
`;

function CategoryTitle(props) {
  return (
    <Wrapper>
      <Name>{props.name}</Name>
      <div>
        <Currency value={props.total} />
      </div>
    </Wrapper>
  );
}

export default CategoryTitle;
