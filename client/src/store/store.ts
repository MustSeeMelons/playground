import { createStore } from "redux";
import { categoryReducer } from "../reducers/categoryReducers";
import { Category } from "../../../_models/category";

// Global store definition
export interface State {
    images: Category[]
}

// Global initial state of the app
export const initialState: State = {
    images: []
}

export const store = createStore(categoryReducer);