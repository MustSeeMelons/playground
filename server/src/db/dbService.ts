import { Category } from "../../../_requests/addCategory";
import { MongoClient, Db, ObjectID } from "mongodb";
import _ from "lodash";
import { MONGO_URL, DB_URL, CATEGOTY_COLLECTION } from "../mongoConfig";
import { CategoryExists, OK_MESSAGE, CategoryReferenced } from "../responses";
import { ParentDoesNotExist } from "../responses/parentDoesNotExist";
import { DeleteCategory } from "../../../_requests/deleteCategory";

const obtainDb = async (): Promise<Db> => {
    const client: MongoClient = await MongoClient.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = client.db(DB_URL);

    return db;
}

const addCategory = async (category: Category) => {
    const db = await obtainDb();

    const collection = db.collection(CATEGOTY_COLLECTION);

    const existingCategory = await collection.findOne<Category>({
        title: category.title
    });

    if (existingCategory) {
        throw new CategoryExists();
    } else if (category.parentId) {
        const parent = await collection.findOne<Category>({
            _id: new ObjectID(category.parentId)
        });

        if (!parent) {
            throw new ParentDoesNotExist();
        } else {
            await collection.insertOne({
                title: category.title,
                parentId: new ObjectID(category.parentId)
            });
        }
    } else {
        await collection.insertOne(category);
    }
}

const listCategories = async () => {
    const db = await obtainDb();

    const collection = db.collection(CATEGOTY_COLLECTION);

    const documents = collection.find<Category>({});

    let results: Category[] = [];

    const wrap = new Promise<void>((resolve) => {
        documents.toArray((err, categories) => {
            if (err) {
                throw err;
            }
            results = categories
            resolve();
        })
    });

    await wrap;

    return {
        categories: results
    };
}

const deleteCategory = async (deleteCategory: DeleteCategory) => {
    const db = await obtainDb();

    const collection = db.collection(CATEGOTY_COLLECTION);

    const documents = collection.find<Category>({
        parentId: new ObjectID(deleteCategory._id)
    })

    let results: Category[] = [];

    const wrap = new Promise<void>((resolve) => {
        documents.toArray((err, categories) => {
            if (err) {
                throw err;
            }
            results = categories
            resolve();
        })
    })

    await wrap;

    if (_.isEmpty(results)) {
        await collection.deleteOne({
            _id: new ObjectID(deleteCategory._id)
        });

        return OK_MESSAGE;
    } else {
        throw new CategoryReferenced();
    }


}

export {
    addCategory,
    listCategories,
    deleteCategory
}