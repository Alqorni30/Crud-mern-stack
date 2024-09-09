import axios from 'axios';

type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
};

const API_URL = 'https://express-api-steel-mu.vercel.app/products';

// Mengambil daftar produk
export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(API_URL);
    // Memeriksa apakah response.data.data adalah array produk
    if (Array.isArray(response.data.data)) {
      return response.data.data;
    } else {
      throw new Error('Data format is incorrect');
    }
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Menambahkan produk baru
export const addProduct = async (product: Product): Promise<Product> => {
  try {
    const response = await axios.post(API_URL, product, {
      headers: { 'Content-Type': 'application/json' },
    });
    // Memeriksa apakah response.data adalah objek produk yang baru ditambahkan
    if (response.data && response.data.data.id) {
      return response.data.data;
    } else {
      throw new Error('Data format is incorrect');
    }
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

// Menghapus produk
export const deleteProduct = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};

// Mengedit produk
export const editProduct = async (id: string, product: Product): Promise<Product> => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, product, {
      headers: { 'Content-Type': 'application/json' },
    });
    // Memeriksa apakah response.data.data adalah objek produk yang baru diubah
    if (response.data && response.data.data) {
      return response.data.data;
    } else {
      throw new Error('Data format is incorrect');
    }
  } catch (error) {
    console.error('Error editing product:', error);
    throw error;
  }
};
