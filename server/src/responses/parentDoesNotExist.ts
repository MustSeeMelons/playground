export class ParentDoesNotExist extends Error {
    constructor() {
        super();
        this.message = "Parent does not exist"
    }
}