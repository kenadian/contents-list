import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";

import { addItem } from "../actions/contents";

import LabelledTextField from "./labelled_text_field";
import LabelledSelectField from "./labelled_select_field";
import AddButton from "./add_button";

const StyledForm = styled.form`
  @media (device-width: 411px) and (device-height: 731px) {
    bottom: 0;
    z-index: 999;
    height: 70px;
    box-shadow: 0px -17px 17px 0px rgb(255, 255, 255);
  }
  @media (min-width: 412px) {
    top: 142px;
    padding: 30px 0;
  }
  position: fixed;
  background-color: white;
  align-items: flex-end;
  display: flex;
  width: 95vw;
  max-width: 916px;
  justify-content: space-around;
`;

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
      <StyledForm onSubmit={this.handleSubmit}>
        <LabelledTextField
          order="1"
          width="155px"
          name="name"
          id="name"
          autoFocus={true}
          value={this.state.name}
          onChange={this.handleInputChange}
        >
          Name
        </LabelledTextField>

        <LabelledSelectField
          id="categoryId"
          name="categoryId"
          order="2"
          value={this.state.categoryId}
          onChange={this.handleInputChange}
        >
          Category
        </LabelledSelectField>

        <LabelledTextField
          order="3"
          width="70px"
          name="amount"
          id="amount"
          type="number"
          value={this.state.amount > 0 ? this.state.amount : ""}
          onChange={this.handleInputChange}
        >
          Amount
        </LabelledTextField>

        <AddButton order="4">Add</AddButton>
      </StyledForm>
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
