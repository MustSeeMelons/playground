import * as Mongo from "mongodb";
import Chalk from "chalk";

import {
    MONGO_URL,
    DB_URL,
    CATEGOTY_COLLECTION
} from "./mongoConfig";

const log = (msg: string, err: boolean = false) => {
    const func = err ? Chalk.redBright : Chalk.magentaBright;
    console.log(func(msg));
}

(async () => {
    let client: Mongo.MongoClient | undefined = undefined;

    try {
        client = await Mongo.MongoClient.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        log("Connected.\n");

        const db: Mongo.Db = client.db(DB_URL);

        log("Dropping collections.");
        db.dropCollection(CATEGOTY_COLLECTION);

        log("Creating collections.");
        await db.createCollection(CATEGOTY_COLLECTION);

        log("Done.");
    } catch (e) {
        log("\nSomething went wrong.\n", true);
        log(e, true);
        process.exit(0);
    } finally {
        if (client && client.isConnected) {
            log("\nClosing the connection.\n");
            client.close();
        } else {
            log("\nNothing to close.\n");
        }
    }
})();



