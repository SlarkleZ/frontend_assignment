import {RootState} from "./index";

export function getProductState(state: RootState) {
  return state.productReducer.products;
}

export function getUserState(state: RootState) {
  return state.userReducer.users;
}
