import { Category } from "../../../_models/category";
import { CategoryListResponse } from "../../../_responses/cateogryList";

export enum CategoryActionTypes {
    ADD = "CAT_ADD",
    REMOVE = "CAT_REMOVE",
    ADD_MULTIPLE = "CAT_ADD_MULTIPLE",
    SET = "SET"
}

/**
 * @description Category add action interface
 * @export
 * @interface IAddCategory
 */
export interface IAddCategory { type: CategoryActionTypes.ADD, payload: { category: Category } }

/**
 * @description Add multiple categories action interface
 * @export
 * @interface IAddMultipleCategories
 */
export interface IAddMultipleCategories { type: CategoryActionTypes.ADD_MULTIPLE, payload: { categories: Category[] } }

/**
 * @description Set the category lust
 * @export
 * @interface ISetCategories
 */
export interface ISetCategories { type: CategoryActionTypes.SET, payload: { categories: Category[] } }

/**
 * @description Returns an add category action
 * @param {Category} category 
 */
export const addCategoryActionCreator = (category: Category): IAddCategory => {
    return {
        type: CategoryActionTypes.ADD,
        payload: {
            category: category
        }
    }
}

/**
 * @description Returns an add multiple category action
 * @param {CategoryListResponse} categoryListResponse 
 */
export const addMultipleCategoryActionCreator = (categoryListResponse: CategoryListResponse): IAddMultipleCategories => {
    return {
        type: CategoryActionTypes.ADD_MULTIPLE,
        payload: categoryListResponse
    }
}

/**
 * @description Returns an set categories action
 * @param categoryListResponse
 */
export const setCategoriesActionCreator = (categoryListResponse: CategoryListResponse): ISetCategories => {
    return {
        type: CategoryActionTypes.SET,
        payload: categoryListResponse
    }
}