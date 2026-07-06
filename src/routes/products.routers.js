import express from "express";

import {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from "../controllers/products.controllers.js";

const router = express.Router();

router.get("products", getProducts);

router.get("products/:id", getProductById);

router.post("products", authentication,createProduct);

router.put("products/:id", authentication, updateProduct);

router.delete("products/:id", authentication, deleteProduct);

export default router;