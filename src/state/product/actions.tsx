
import { Product, productActionType, productActionInterface } from "./types";

export function addProduct(product: Product): productActionInterface {
  return {
    type: productActionType.ADD_PRODUCT,
    payload: product,
  };
}

export function deleteProduct(index: number): productActionInterface {
  return {
    type: productActionType.DELETE_PRODUCT,
    payload: index,
  };
}

