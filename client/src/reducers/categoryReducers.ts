import { CategoryActionTypes } from "../actions/categoryActions";
import { categoryInitialState, CategoryState } from "../store/store";
import { Action } from "../actions";

export const categoryReducer = (state: CategoryState = categoryInitialState, action: Action) => {
    switch (action.type) {
        case CategoryActionTypes.ADD:
            return {
                categories: [...state.categories, action.payload.category]
            }
        case CategoryActionTypes.ADD_MULTIPLE:
            return {
                categories: [...state.categories, ...action.payload.categories]
            }
        default:
            return state;
    }
}