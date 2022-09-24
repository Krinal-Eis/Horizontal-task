// ** Redux Imports
import { combineReducers } from "redux";

// ** Reducers Imports
import productsReducer from "./product";
import cartReducer from './cart'

const rootReducer = combineReducers({
    productsReducer,
    cartReducer
});

export default rootReducer;
