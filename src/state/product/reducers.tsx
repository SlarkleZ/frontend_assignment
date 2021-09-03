import { productState, productActionType, productActionInterface } from "./types";

const initialState: productState = {
  products: [],
};

export function productReducer(state = initialState, action: productActionInterface): productState {
  switch (action.type) {
    case productActionType.ADD_PRODUCT:
      return { products: [...state.products, action.payload] };
    case productActionType.DELETE_PRODUCT:
      return { products: state.products.filter((product, index) => index !== action.payload) };
    default:
      return state;
  }
}
