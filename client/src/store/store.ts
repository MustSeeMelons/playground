import { createStore, combineReducers, applyMiddleware } from "redux";
import { categoryReducer } from "../reducers/categoryReducers";
import { globalReducer } from "../reducers/globalReducer";
import { Category } from "../../../_models/category";
import { composeWithDevTools } from "redux-devtools-extension";

// Global store definition
export interface CategoryState {
    categories: Category[],
}

export interface GlobalState {
    images: any[]
}

export interface State {
    categoryReducer: CategoryState;
    globalReducer: GlobalState;
}

export const categoryInitialState: CategoryState = {
    categories: []
}

export const globalInitialState: GlobalState = {
    images: []
}

// export const store = createStore(categoryReducer);

/* eslint-disable no-underscore-dangle */
export const store = createStore(
    combineReducers({
        categoryReducer,
        globalReducer
    }),
    composeWithDevTools(
        applyMiddleware(),
    )
);
/* eslint-enable */