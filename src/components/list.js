import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import PropTypes from "prop-types";

import { removeItem, removeAll } from "../actions/contents";

import StartMessage from "./start_message";
import CategoryTitle from "./category_title";
import Item from "./item";
const CategoryWrapper = styled.div`
  margin-bottom: 20px;
`;

class ItemList extends Component {
  handleRemove = event => {
    //TODO consider a confirmation before removing item
    this.props.removeItem(Number(event.currentTarget.dataset.id));
  };
  handleRemoveAll = event => {
    //TODO consider a confirmation before removing item
    this.props.removeAll(Number(event.currentTarget.dataset.id));
  };

  render() {
    if (this.props.categoryItems.length === 0) {
      return <StartMessage />;
    }

    return this.props.categoryIds.map(id => {
      return (
        <CategoryWrapper key={id}>
          {//Show the category name if it has any items
          // if the item has a zero amount, then the total can be 0.
          // A user might want to put items in and then lookup values later.
          // Currently amount field won't accept 0 as a value.
          this.props.category[id].total > 0 ||
          this.props.categoryItems.filter(value => {
            return value.categoryId === id;
          }).length >= 1 ? (
            <CategoryTitle
              dataCategoryId={id}
              name={this.props.category[id].name}
              total={this.props.category[id].total}
              handleRemoveAll={this.handleRemoveAll}
            />
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
                <Item
                  key={index}
                  index={index}
                  itemId={item.itemId}
                  handleRemove={this.handleRemove}
                  name={this.props.items[item.itemId].name}
                  amount={this.props.items[item.itemId].amount}
                />
              );
            })}
        </CategoryWrapper>
      );
    });
  }
}

ItemList.propTypes = {
  removeItem: PropTypes.func,
  removeAll: PropTypes.func,
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
  { removeItem, removeAll }
)(ItemList);
