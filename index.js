import express from "express";
import cors from "cors";
import 'dotenv/config';
import productsRouter from './src/routes/products.routers.js';

const app = express();

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
});

app.use(productsRouter);    //usamos el router de productos para manejar las rutas relacionadas con los productos

import authRouter from "./src/routes/auth.routes.js";

app.use("/api", productsRouter);
app.use("/api", authRouter);

app.use(function (req, res, next) {
    res.header(404)
    res.send("404 Not Found");  
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
