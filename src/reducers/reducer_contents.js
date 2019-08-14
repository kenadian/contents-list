import { ADD_ITEM, REMOVE_ITEM } from "../actions/contents";
import { removeIn } from "immutable";

const initialState = {
  total: 0,
  entities: {
    category: {
      byId: {
        1: { name: "Jewellery", total: 0 },
        2: { name: "Collectibles", total: 0 },
        3: { name: "Musical Instruments", total: 0 },
        4: { name: "Sports Equipment", total: 0 },
        5: { name: "Tools", total: 0 }
      },
      allIds: [1, 2, 3, 4, 5]
    },
    items: {
      byId: {},
      allIds: []
    },
    categoryItems: {
      byId: {},
      allIds: []
    }
  }
};

// Generates next id when adding items to store
function generateId(inputArray) {
  if (inputArray.length === 0) {
    return 0;
  }
  inputArray.sort(function(a, b) {
    return a - b;
  });
  return Number(inputArray.pop()) + 1;
}

export default function(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case ADD_ITEM:
      const { amount, categoryId, name } = payload || "";
      const items = state.entities.items;
      const itemId = generateId(state.entities.items.allIds.slice(0));
      const categoryItemsId = generateId(
        state.entities.categoryItems.allIds.slice(0)
      );

      return {
        ...state,
        total: Number(state.total) + Number(amount),
        entities: {
          ...state.entities,
          category: {
            ...state.entities.category,
            byId: {
              ...state.entities.category.byId,
              [categoryId]: {
                ...state.entities.category.byId[categoryId],
                total:
                  Number(state.entities.category.byId[categoryId].total) +
                  Number(amount)
              }
            }
          },
          items: {
            byId: {
              ...items.byId,
              [itemId]: {
                name,
                amount
              }
            },
            allIds: [...items.allIds, itemId]
          },
          categoryItems: {
            byId: {
              ...state.entities.categoryItems.byId,
              [categoryItemsId]: {
                id: categoryItemsId,
                itemId,
                categoryId: Number(categoryId)
              }
            },
            allIds: [...state.entities.categoryItems.allIds, categoryItemsId]
          }
        }
      };

    case REMOVE_ITEM:
      const removeItemId = payload;
      const removeAmount = state.entities.items.byId[removeItemId].amount;
      // Using immutables removeIn to simplify state management
      // First remove from item.byId object
      let newState = removeIn(state, [
        "entities",
        "items",
        "byId",
        removeItemId
      ]);

      // Next subtract the amount being removed from the grand total
      newState.total -= removeAmount;

      // Filter out the removed id from the allIds array
      newState.entities.items.allIds = newState.entities.items.allIds.filter(
        element => element !== removeItemId
      );

      // lookup the category id that needs to have its total updated
      const updateCategoryId =
        newState.entities.categoryItems.byId[removeItemId].categoryId;

      // update the category total
      newState.entities.category.byId[updateCategoryId].total -= removeAmount;

      // Again use the immutable.js library function to easily remove the
      // appropriate property from the categoryItems lookup object
      newState = removeIn(newState, [
        "entities",
        "categoryItems",
        "byId",
        removeItemId
      ]);

      // filter out the removed id from allIds
      newState.entities.categoryItems.allIds = newState.entities.categoryItems.allIds.filter(
        element => element !== removeItemId
      );

      // return the new state object.
      // And done.
      return newState;
    default:
      return state;
  }
}
