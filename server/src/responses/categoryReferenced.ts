export class CategoryReferenced extends Error {
    constructor() {
        super();
        this.message = "Category is referenced";
    }
}