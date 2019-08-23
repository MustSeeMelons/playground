import _ from "lodash";
import { State } from "../store/store";
import { Category } from "../../../_models/category";

// TODO use reselect?
export const isCategoriesLoaded = (state: State) => {
    return !_.isEmpty(state.categoryReducer.categories)
}

export const getChildrenForCateogry = (categories: Category[], categoryId: string | undefined) => {
    return categories.filter((category) => category.parentId === categoryId);
}