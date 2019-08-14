import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItem } from "../actions/contents";
import Currency from "./currency";
import PropTypes from "prop-types";
class ItemList extends Component {
  handleRemove = event => {
    this.props.removeItem(event.currentTarget.attributes.dataid.value);
  };

  render() {
    return this.props.categoryIds.map(id => {
      return (
        <div key={id}>
          {//Show the category name if it has any items

          this.props.category[id].total > 0 ||
          this.props.categoryItems.filter(value => {
            return value.categoryId === id;
          }).length >= 1 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "90vw",
                fontSize: 14,
                padding: "20px 0 5px 0",
                marginBottom: 10,
                borderBottomWidth: 1,
                borderBottomColor: "#5cba4780",
                borderBottomStyle: "solid",
                maxWidth: 800
              }}
            >
              <div
                style={{
                  flex: 1,
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  color: "#5cba47"
                }}
              >
                {this.props.category[id].name}
              </div>
              <div style={{ flex: 0, fontSize: "1.3rem" }}>
                <Currency value={this.props.category[id].total} />
              </div>
            </div>
          ) : null}

          {this.props.categoryItems
            .filter(value => {
              //Show items from the current category
              if (value.categoryId === id) {
                return true;
              }
            })
            .map((item, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 14
                  }}
                  key={index}
                >
                  <div style={{ flex: 1 }}>
                    {this.props.items[item.itemId].name}
                  </div>

                  <div style={{ flex: 0, marginRight: 25 }}>
                    <Currency value={this.props.items[item.itemId].amount} />
                  </div>

                  <button
                    style={{ flex: "0 1 0%", color: "crimson" }}
                    className="remove-btn"
                    type="button"
                    dataid={item.itemId}
                    onClick={this.handleRemove}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
        </div>
      );
    });
  }
}
function mapStateToProps(state) {
  return {
    categoryItems: Object.values(state.content.entities.categoryItems.byId),

    category: state.content.entities.category.byId,
    categoryIds: state.content.entities.category.allIds,
    items: state.content.entities.items.byId
  };
}
export default connect(
  mapStateToProps,
  { removeItem }
)(ItemList);
