import {
    createProductService,
    getProductsService,
    getProductByIdService,
    updateProductService,
    deleteProductService
} from '../services/products.service.js';

// Obtener todos los productos
export const getProducts = async (req, res) => {
    try {
        const products = await getProductsService();
        return res.status(200).json(products);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Obtener un producto por ID
export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await getProductByIdService(id);

        if (!product) {
            return res.status(404).json({
                message: "Producto no encontrado"
            });
        }

        return res.status(200).json(product);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Crear producto
export const createProduct = async (req, res) => {
    try {

        const newProduct = await createProductService(req.body);

        return res.status(201).json(newProduct);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Actualizar producto
export const updateProduct = async (req, res) => {
    try {

        const { id } = req.params;

        const updatedProduct = await updateProductService(id, req.body);

        if (!updatedProduct) {
            return res.status(404).json({
                message: "Producto no encontrado"
            });
        }

        return res.status(200).json(updatedProduct);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Eliminar producto
export const deleteProduct = async (req, res) => {

    try {

        const { id } = req.params;

        const deletedProduct = await deleteProductService(id);

        if (!deletedProduct) {
            return res.status(404).json({
                message: "Producto no encontrado"
            });
        }

        return res.status(200).json({
            message: "Producto eliminado correctamente",
            product: deletedProduct
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            message: "Error interno del servidor"
        });

    }

};

export const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        // Después agregaremos la lógica con Firebase

        return res.status(200).json({
            message: "Login funcionando",
            email
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

};