export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
}

export interface productState {
  products: Product[];
}

export enum productActionType {
  ADD_PRODUCT = "ADD_PRODUCT",
  DELETE_PRODUCT = "DELETE_PRODUCT",
}
export type productAction = productActionType;

export interface productActionInterface {
  type: productAction;
  payload: any;
}
