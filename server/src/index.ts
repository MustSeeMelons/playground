import {
    Application, Request, Response, NextFunction
} from "express";
import categoryRouter from "./routes/categeoryRoutes";

// TODO: Is there really no better solution?
const express = require("express");
import * as bodyParser from "body-parser";

const app: Application = express();

app.use(bodyParser.json());

app.use("/category", categoryRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send({
        msg: err.message
    })
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
})