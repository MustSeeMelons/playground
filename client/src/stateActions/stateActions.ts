import { store } from "../store/store";
import { categoryApi } from "../api/api";
import { CategoryListResponse } from "../../../_responses/cateogryList";
import { setCategoriesActionCreator } from "../actions/categoryActions";

/**
 * TODO: A good place of Redux Thunk?
 * Holds actions that many componets may need, like loading some resource.
 */
const stateActions = {
    loadCategories: async (): Promise<void> => {
        const listResponse: CategoryListResponse = await categoryApi.fetchCategories();
        store.dispatch(setCategoriesActionCreator(listResponse));
    }
}

export { stateActions };