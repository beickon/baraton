import { combineReducers } from "redux";
import menuReducer from "./menuReducer.js";
import productReducer from "./productReducer.js";
import shoppingCartReducer from "./shoppingCartReducer.js";

export default combineReducers({
    menuReducer,
    productReducer,
    shoppingCartReducer,
});
