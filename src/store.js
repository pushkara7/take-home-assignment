import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./ducks/reducer";

const middleware = [thunk];
const rootReducer = combineReducers({
    getData: reducer,
});

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
