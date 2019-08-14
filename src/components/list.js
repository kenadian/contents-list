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
    return this.props.categoryIds.map(id => {
      return (
        <div className="contents-list" key={id}>
          {//Show the category name if it has any items
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

          {this.props.categoryItems
            .filter(value => {
              //Show items from the current category
              if (value.categoryId === id) {
                return true;
              }
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
