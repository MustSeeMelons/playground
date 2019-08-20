import {
    Request, Response, Router, NextFunction
} from "express";
import {
    Category
} from "../../../_models/category";
import { addCategory, listCategories, deleteCategory } from "../db/dbService";
import { asyncErrHandler } from "../utils";
import { OK_MESSAGE } from "../responses";
const express = require("express");

const categoryRouter: Router = express.Router();

/* Add a category, with an optional parent id */
categoryRouter
    .route("/add")
    .post(async (req: Request, res: Response, next: NextFunction) => {
        asyncErrHandler(async () => {
            const body: Category = req.body;

            await addCategory(body);

            res.send(OK_MESSAGE);
        })(req, res, next);
    });

/* Returns all categories in a flat fashion */
categoryRouter
    .route("/list")
    .get((req: Request, res: Response, next: NextFunction) => {
        asyncErrHandler(async () => {
            res.send(await listCategories());
        })(req, res, next);
    });

/* Deletes a category, checks if its not referenced */
categoryRouter
    .route("/delete")
    .post((req: Request, res: Response, next: NextFunction) => {
        asyncErrHandler(async () => {
            res.send(await deleteCategory(req.body));
        })(req, res, next);
    })

export default categoryRouter;