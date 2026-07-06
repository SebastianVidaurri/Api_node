import {
    getAllProductsModel,
    getProductByIdModel,
    createProductModel,
    updateProductModel,
    deleteProductModel
} from "../models/products.model.js";

export const getProductsService = async () => {

    return await getAllProductsModel();

};

export const getProductByIdService = async (id) => {

    return await getProductByIdModel(id);

};

export const createProductService = async (productData) => {

    return await createProductModel(productData);

};

export const updateProductService = async (id, productData) => {

    const exists = await getProductByIdModel(id);

    if (!exists) return null;

    return await updateProductModel(id, productData);

};

export const deleteProductService = async (id) => {

    const product = await getProductByIdModel(id);

    if (!product) return null;

    await deleteProductModel(id);

    return product;

};