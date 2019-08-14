import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/contents";

class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = { amount: 0, categoryId: 0, name: "" };
  }

  handleSubmit = event => {
    //Allow
    if (this.state.name && this.state.categoryId && this.state.amount) {
      this.props.addItem(this.state);
      this.setState({ amount: 0, categoryId: 0, name: "" });
      event.preventDefault();
    } else {
      event.preventDefault();
      return;
    }
  };

  handleInputChange = event => {
    const target = event.target;
    const value =
      target.type === "number" ? Number(target.value) : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "flex-start"
          }}
        >
          <select
            name="categoryId"
            value={this.state.categoryId}
            style={{
              flex: 1,
              alignSelf: "stretch",
              borderWidth: 1,
              borderColor: "grey",
              fontSize: 16,
              padding: 5,
              marginBottom: 10,
              order: 1
            }}
            onChange={this.handleInputChange}
          >
            <option value="0">Select Category...</option>
            <option value="1">Jewellery</option>
            <option value="2">Collectibles</option>
            <option value="3">Musical Instruments</option>
            <option value="4">Sports Equipment</option>
            <option value="5">Tools</option>
          </select>
          <label
            className="field-label"
            htmlFor="name"
            style={{
              alignSelf: "flex-start",
              color: "rgb(77, 77, 79)",
              display: "inline",
              order: 2
            }}
          >
            Item Name
          </label>
          <input
            name="name"
            type="text"
            style={{
              flex: 1,
              alignSelf: "stretch",
              borderWidth: 1,
              borderColor: "grey",
              fontSize: 16,
              padding: 5,
              order: 3
            }}
            value={this.state.name}
            onChange={this.handleInputChange}
          />

          <label
            className="field-label"
            htmlFor="amount"
            style={{
              alignSelf: "flex-start",
              marginTop: 5,
              color: "rgb(77, 77, 79)",
              order: 4
            }}
          >
            Item Value e.g. 3420
          </label>

          <input
            className="amountField"
            name="amount"
            id="amount"
            type="number"
            style={{
              flex: 1,
              alignSelf: "stretch",
              borderWidth: 1,
              borderColor: "grey",
              fontSize: 16,
              padding: 5,
              order: 5
            }}
            value={this.state.amount > 0 ? this.state.amount : ""}
            onChange={this.handleInputChange}
          />

          <button
            style={{
              flex: 1,
              alignSelf: "stretch",
              borderWidth: 1,
              background: "#5cba47",
              fontSize: "1.3rem",
              fontWeight: "bold",
              padding: 5,
              marginTop: 10,
              color: "white",
              order: 6
            }}
            onClick={this.handleSubmit}
          >
            Add Item{" "}
          </button>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { total: state.total };
}

export default connect(
  mapStateToProps,
  { addItem }
)(Inputs);
