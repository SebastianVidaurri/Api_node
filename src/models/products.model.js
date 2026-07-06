import {
    findAllProducts,
    findProductById,
    insertProduct,
    updateProductById,
    deleteProductById
} from "../data/firebase.data.js";

export const getAllProductsModel = async () => {

    return await findAllProducts();

};

export const getProductByIdModel = async (id) => {

    return await findProductById(id);

};

export const createProductModel = async (productData) => {

    return await insertProduct(productData);

};

export const updateProductModel = async (id, productData) => {

    return await updateProductById(id, productData);

};

export const deleteProductModel = async (id) => {

    return await deleteProductById(id);

};