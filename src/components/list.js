import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItem } from "../actions/contents";
import Currency from "./currency";
import PropTypes from "prop-types";
class ItemList extends Component {
  handleRemove = event => {
    //TODO consider a confirmation before removing item
    this.props.removeItem(Number(event.currentTarget.attributes.dataid.value));
  };

  render() {
    if (this.props.categoryItems.length === 0) {
      return (
        <div className="list-start-message">
          <h1>Let's get started!</h1>
          <p>Enter the items you want coverage for.</p>
        </div>
      );
    }

    return this.props.categoryIds.map(id => {
      return (
        <div className="contents-list" key={id}>
          {//Show the category name if it has any items
          // if the item has a zero amount, then the total can be 0.
          // A user might want to put items in and then lookup values later.
          // Currently amount field won't accept 0 as a value.
          this.props.category[id].total > 0 ||
          this.props.categoryItems.filter(value => {
            return value.categoryId === id;
          }).length >= 1 ? (
            <div className="category-title">
              <div className="category-name">
                {this.props.category[id].name}
              </div>
              <div className="category-total">
                <Currency value={this.props.category[id].total} />
              </div>
            </div>
          ) : null}

          {//Show items from the current category
          this.props.categoryItems
            .filter(value => {
              if (value.categoryId === id) {
                return true;
              }
              return false;
            })
            .map((item, index) => {
              return (
                <div className="item-container" key={index}>
                  <div className="item-name">
                    {this.props.items[item.itemId].name}
                  </div>{" "}
                  <div className="item-amount">
                    <Currency value={this.props.items[item.itemId].amount} />
                  </div>
                  <button
                    className="item-remove-btn"
                    type="button"
                    name="remove-btn"
                    id="remove-btn"
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

ItemList.propTypes = {
  removeItem: PropTypes.func,
  categoryItems: PropTypes.array,
  categoryIds: PropTypes.array,
  items: PropTypes.object
};

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
