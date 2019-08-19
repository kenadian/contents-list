import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
`;

class StartMessage extends Component {
  render() {
    return (
      <Wrapper>
        <h1>Let's get started!</h1>
        <p>Enter the items you want coverage for.</p>
      </Wrapper>
    );
  }
}
export default StartMessage;
