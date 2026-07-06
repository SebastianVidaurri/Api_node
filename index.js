import express from "express";
import cors from "cors";
import "dotenv/config";

import productsRouter from "./src/routes/products.routers.js";
import authRouter from "./src/routes/auth.routes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use(productsRouter);
app.use(authRouter);

app.use((req, res) => {
    res.status(404).send("404 Not Found");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});