import { globalInitialState, GlobalState } from "../store/store";
import { Action } from "../actions";
import { GlobalActionTypes } from "../actions/globalActions";

export const globalReducer = (state: GlobalState = globalInitialState, action: Action) => {
    switch (action.type) {
        case GlobalActionTypes.ADD_RANDOM_PIC:
            return {
                images: [...state.images, action.payload.pic]
            }
        default:
            return state;
    }
}