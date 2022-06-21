import { combineReducers, createStore } from "redux";
import cardReducer from "./Reducers/cardReducer";

const rootReducer = combineReducers({});

export const store = createStore(rootReducer);
