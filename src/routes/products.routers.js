import express from "express";

import {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from "../controllers/products.controllers.js";

import { authenticateToken } from "../middleware/authentication.js";

const router = express.Router();

router.get("/products", getProducts);

router.get("/products/:id", getProductById);

router.post("/products", authenticateToken, createProduct);

router.put("/products/:id", authenticateToken, updateProduct);

router.delete("/products/:id", authenticateToken, deleteProduct);

export default router;