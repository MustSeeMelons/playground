import { CategoryActionTypes } from "../actions/categoryActions";
import { initialState, State } from "../store/store";
import { Action } from "../actions";

export const categoryReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case CategoryActionTypes.ADD:
            return {
                ...state,
                images: [...state.images, action.payload.category]
            }
        default:
            return state;
    }
}