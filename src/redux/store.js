
import { createStore, combineReducers } from "redux";
import productsReducer from "./ProductReducer";
import cartReducer from "./cartReducer";
import { devToolsEnhancer } from "@redux-devtools/extension";
const rootReducer = combineReducers({
    products:productsReducer,
    cart:cartReducer,
});


const store = createStore(rootReducer,devToolsEnhancer());



export default store;