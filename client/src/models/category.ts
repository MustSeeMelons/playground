/**
 * Interface for a single category, with a pointer to its parent (optional)
 * @export
 * @interface Category
 */
export interface Category {
    id: string;
    parentId?: string;
    title: string; // This should be a code with translations for each lang
}