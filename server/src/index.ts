import {
    Application, Request, Response
} from "express";

const express = require("express");

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World")
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
})