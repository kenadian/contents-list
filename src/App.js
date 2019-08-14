import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Inputs from "./components/inputs";
import ItemList from "./components/list";
import Currency from "./components/currency";
import styled from "styled-components";

const Total = props => {
  // if (props.total > 0) {

  return (
    <div className="total-container">
      <div>Total Contents </div>

      <div>
        &nbsp; <Currency value={props.total} />
      </div>
    </div>
  );
  // }
  // return null;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <div className="logo" />
          <div className="login" />
        </div>
        <div className="title-container">
          <div className="title">Contents List</div>
          <Total total={this.props.total} />
        </div>

        <div className="inputs-container">
          <Inputs />
        </div>
        <div className="itemlist-container">
          <ItemList />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    total: state.content.total
  };
}
export default connect(mapStateToProps)(App);
