import { IAddCategory, IAddMultipleCategories, ISetCategories } from "./categoryActions";
import { IAddRandomPic } from "./globalActions";

export type Action = IAddCategory | IAddMultipleCategories | IAddRandomPic | ISetCategories;