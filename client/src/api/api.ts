import Axios, { AxiosRequestConfig } from "axios";
import { CategoryListResponse } from "../../../_responses/cateogryList";
import { URLS } from "./apiConfig";

const axiosConfig: AxiosRequestConfig = {
    timeout: 30000
}

// TODO finish this wrapper which would handle setting err flags
const errorHandler = async () => {

}

export const categoryApi = {
    fetchCategories: async (): Promise<CategoryListResponse> => {

        const response = await Axios.get(URLS.LIST_CATEGORIES, axiosConfig);

        return response.data as CategoryListResponse;
    }
}

export const globalApi = {
    fetchRandomPics: async (): Promise<any> => {
        const response = await Axios.get(URLS.RANDOM_PIC, { ...axiosConfig, responseType: "arraybuffer" });

        return `data:image/jpeg;base64,${Buffer.from(response.data, "binary").toString("base64")}`;
    }
}