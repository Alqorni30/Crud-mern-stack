import axios from 'axios';

type Product = {
    id: number;
    name: string;
    description: string;
    image: string;
    price: string;
}

const API_URL = "http://localhost:1001/products";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const addProduct = async (product: Product): Promise<Product> => {
  try {
    const response = await axios.post(API_URL, product, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

export const deleteProduct = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

export const editProduct = async (id: number, product: Product): Promise<Product> => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, product, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error editing product:", error);
    throw error;
  }
};
