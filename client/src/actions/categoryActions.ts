import { Category } from "../models/category";

export enum CategoryActionTypes {
    ADD = "CAT_ADD",
    REMOVE = "CAT_REMOVE",
    ADD_MULTIPLE = "CAT_ADD_MULTIPLE"
}

/**
 * @description Category add action interface
 * @export
 * @interface IAddCategory
 */
export interface IAddCategory { type: CategoryActionTypes.ADD, payload: { category: Category } }

/**
 * @description Returns an add category action
 * @param category 
 */
export const addCategoryActionCreator = (category: Category): IAddCategory => {
    return {
        type: CategoryActionTypes.ADD,
        payload: {
            category: category
        }
    }
}