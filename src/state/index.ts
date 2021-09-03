import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import { productReducer } from "./product/reducers";
import { userReducer } from "./user/reducers";

const rootReducer = combineReducers({
  productReducer,
  userReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middleware = applyMiddleware(thunk)
  const store = createStore(rootReducer, middleware);

  return store;
}
