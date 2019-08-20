import _ from "lodash";
import { State } from "../store/store";

// TODO use reselect?
export const isCategoriesLoaded = (state: State) => {
    return !_.isEmpty(state.categoryReducer.categories)
}