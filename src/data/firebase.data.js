import { db } from "./firebase.js";

import {
    collection,
    getDocs,
    doc,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc
} from "firebase/firestore";

const productsCollection = collection(db, "products");

// Obtener todos
export const findAllProducts = async () => {

    const querySnapshot = await getDocs(productsCollection);

    return querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));

};

// Obtener por ID
export const findProductById = async (id) => {

    const productRef = doc(db, "products", id);

    const productSnap = await getDoc(productRef);

    if (!productSnap.exists()) return null;

    return {
        id: productSnap.id,
        ...productSnap.data()
    };

};

// Crear
export const insertProduct = async (productData) => {

    const docRef = await addDoc(productsCollection, productData);

    return {
        id: docRef.id,
        ...productData
    };

};

// Actualizar
export const updateProductById = async (id, productData) => {

    const productRef = doc(db, "products", id);

    await updateDoc(productRef, productData);

    return {
        id,
        ...productData
    };

};

// Eliminar
export const deleteProductById = async (id) => {

    const productRef = doc(db, "products", id);

    await deleteDoc(productRef);

    return true;

};