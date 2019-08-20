import _ from "lodash";
import { State } from "../store/store";

export const isImagesLoaded = (state: State) => {
    return !_.isEmpty(state.globalReducer.images)
}