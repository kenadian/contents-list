import React, { Component } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1.3rem;
  margin-left: 16px;
  background: ${props => {
    return props.primary ? "#ffc240" : "#ffffff";
  }};
  border: none;
`;

class Button extends Component {
  render() {
    const { dataid, onClick, name, id, primary } = this.props;

    return (
      <StyledButton
        name={name}
        id={id}
        data-id={dataid}
        onClick={onClick}
        primary={primary}
      >
        {this.props.children}
      </StyledButton>
    );
  }
}
export default Button;
