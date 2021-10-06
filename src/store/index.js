import { combineReducers, createStore } from "redux";
import { applyMiddleware } from "redux";
import CartListReducer from "./modules/CartListReducer/CartListReducer";
import  ListReducer from './modules/ListReducer/ListReducer'
import thunk from "redux-thunk";

const reducers = combineReducers({cartList: CartListReducer, list: ListReducer})

const store = createStore(reducers, applyMiddleware(thunk))

export default store