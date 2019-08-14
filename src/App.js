import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Inputs from "./components/inputs";
import ItemList from "./components/list";
import Currency from "./components/currency";
import styled from "styled-components";

const Total = props => {
  if (props.total > 0) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "flex-end"
        }}
      >
        <div>Current Total </div>
        <div style={{ fontSize: "1.2rem" }}>
          <Currency value={props.total} />
        </div>
      </div>
    );
  }
  return null;
};

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          flexDirection: "column",
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          width: "100vw",
          height: "100%",
          paddingBottom: 50
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100vw",
            height: 85,
            WebkitBoxShadow: "0px 0px 3px 0px rgba(0,0,0,0.16)",
            MozBoxShadow: "0px 0px 3px 0px rgba(0,0,0,0.16)",
            boxShadow: "0px -8px 15px rgb(76,76,78)"
          }}
          className="navbar"
        >
          <div className="logo" />
          <div className="login" />
        </div>
        <div
          style={{
            display: "flex",
            width: "90vw",
            justifyItems: "flex-start",
            alignItems: "center",
            padding: "15px 0",
            maxWidth: 800
          }}
        >
          <div className="title">Contents List</div>
          <Total total={this.props.total} />
        </div>

        <div
          style={{
            flex: 1,
            alignItems: "center",
            width: "90vw",
            maxWidth: 400
          }}
        >
          <Inputs />
        </div>
        <div
          style={{
            display: "flex",
            width: "90vw",
            justifyItems: "flex-start",
            alignItems: "center",
            padding: "15px 0",
            maxWidth: 800
          }}
        >
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
