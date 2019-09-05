export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const REMOVE_ALL = "REMOVE_ALL";
export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item
  };
}
export function removeItem(item) {
  return {
    type: REMOVE_ITEM,
    payload: item
  };
}
export function removeAll(category) {
  return {
    type: REMOVE_ALL,
    payload: category
  };
}
