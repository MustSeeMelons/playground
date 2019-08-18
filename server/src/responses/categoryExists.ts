export class CategoryExists extends Error {
    constructor() {
        super();
        this.message = "Category already exists";
    }
}