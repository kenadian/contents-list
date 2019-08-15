import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/contents";
import PropTypes from "prop-types";
class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = { amount: 0, categoryId: 0, name: "" };
  }

  handleSubmit = event => {
    // check that the form values exist and dispatch action to add to store
    if (this.state.name && this.state.categoryId && this.state.amount) {
      this.props.addItem({
        ...this.state,
        amount: Math.round(this.state.amount)
      });
      // TODO is it better to leave the category set to the last value
      // or set it to "Select Category ...". Discuss.
      this.setState({ amount: 0, categoryId: 0, name: "" });
      event.preventDefault();
    } else {
      //TODO handle validation errors
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
      <form className="input-form">
        <div className="field-label-container field-name">
          <label
            className="field-label"
            htmlFor="name"
            style={{
              order: 2
            }}
          >
            Name
          </label>
          <input
            className="contents-itemname"
            id="name"
            name="name"
            type="text"
            autoFocus
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="field-label-container field-category">
          <label
            className="field-label"
            htmlFor="categoryId"
            style={{
              order: 1
            }}
          >
            Category
          </label>
          <select
            className="contents-category"
            id="categoryId"
            name="categoryId"
            value={this.state.categoryId}
            onChange={this.handleInputChange}
          >
            <option value="0">Select...</option>
            <option value="1">Jewellery</option>
            <option value="2">Collectibles</option>
            <option value="3">Musical Instruments</option>
            <option value="4">Sports Equipment</option>
            <option value="5">Tools</option>
          </select>
        </div>

        <div className="field-label-container field-amount">
          <label
            className="field-label"
            htmlFor="amount"
            style={{
              order: 4
            }}
          >
            Amount{" "}
            <span className="field-helper-text">(to nearest dollar)</span>
          </label>

          <input
            className="contents-amount"
            name="amount"
            id="amount"
            type="number"
            value={this.state.amount > 0 ? this.state.amount : ""}
            onChange={this.handleInputChange}
          />
        </div>

        <button className="contents-add" onClick={this.handleSubmit}>
          Add
        </button>
      </form>
    );
  }
}

Inputs.propTypes = {
  addItem: PropTypes.func,
  total: PropTypes.number
};

function mapStateToProps(state) {
  return { total: state.total };
}

export default connect(
  mapStateToProps,
  { addItem }
)(Inputs);
