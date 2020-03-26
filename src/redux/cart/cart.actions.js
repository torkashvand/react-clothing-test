import CartActionType from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionType.TOGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActionType.ADD_ITEM,
  payload: item
});
