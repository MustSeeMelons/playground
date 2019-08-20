import { IAddCategory, IAddMultipleCategories } from "./categoryActions";
import { IAddRandomPic } from "./globalActions";

export type Action = IAddCategory | IAddMultipleCategories | IAddRandomPic;