import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Inputs from "./components/inputs";
import ItemList from "./components/list";
import Currency from "./components/currency";
import NavBar from "./components/navbar";

const Total = props => {
  // if (props.total > 0) {

  return (
    <TotalContainer>
      Total Contents
      <div>
        &nbsp; <Currency value={props.total} />
      </div>
    </TotalContainer>
  );
  // }
  // return null;
};
const TotalContainer = styled.div`
  @media (device-width: 411px) and (device-height: 731px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  @media (min-width: 412px) {
    font-size: 2rem;
    display: flex;
    align-items: flex-end;
  }
`;
const Wrapper = styled.div`
  @media (device-width: 411px) and (device-height: 731px) {
    overflow-y: scroll;
  }
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 100%;
  padding-bottom: 50px;
`;
const TitleWrapper = styled.div`
  @media (device-width: 411px) and (device-height: 731px) {
    align-items: center;
  }

  @media (min-width: 412px) {
    max-width: 1000px;
    align-items: flex-start;
  }
  display: flex;
  justify-items: flex-start;
  position: fixed;
  top: 84px;
  width: 90vw;
  padding: 35px 0 15px 0;
  background-color: white;
  z-index: 99;
`;
const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #5cba47;
  flex: 1;
`;

const InputsWrapper = styled.div`
  @media (device-width: 411px) and (device-height: 731px) {
    position: fixed;
    bottom: 0;
    z-index: 999;
    height: 90px;
    background-color: white;
    background: -moz-linear-gradient(
      top,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.2) 1%,
      rgba(255, 255, 255, 0.8) 27%,
      rgba(255, 255, 255, 1) 100%
    );
    background: -webkit-linear-gradient(
      top,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.2) 1%,
      rgba(255, 255, 255, 0.8) 27%,
      rgba(255, 255, 255, 1) 100%
    );
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.2) 1%,
      rgba(255, 255, 255, 0.8) 27%,
      rgba(255, 255, 255, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#33ffffff', endColorstr='#ffffff',GradientType=0 );
  }

  @media (min-width: 412px) {
    display: flex;
    justify-content: space-around;
    position: fixed;
    top: 142px;
    padding: 30px 0;
    background-color: white;
  }
  align-items: center;
  width: 100vw;
`;
const ItemsWrapper = styled.div`
  @media (device-width: 411px) and (device-height: 731px) {
    height: 489px;
    overflow-y: scroll;
    padding-bottom: 60px;
    position: fixed;
    top: 180px;
  }

  @media (min-width: 412px) {
    display: flex;
    flex-direction: column;
    width: 90vw;
    justify-items: flex-start;
    align-items: center;
    padding: 15px 0;
    position: absolute;
    top: 260px;
    z-index: -9999;
  }
`;
//TODO Finish styling
class App extends Component {
  render() {
    return (
      <Wrapper>
        <NavBar />
        <TitleWrapper>
          <Title>Contents List</Title>
          <Total total={this.props.total} />
        </TitleWrapper>

        <InputsWrapper>
          <Inputs />
        </InputsWrapper>
        <ItemsWrapper>
          <ItemList />
        </ItemsWrapper>
      </Wrapper>
    );
  }
}
function mapStateToProps(state) {
  return {
    total: state.content.total
  };
}
export default connect(mapStateToProps)(App);
