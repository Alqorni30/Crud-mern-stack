import ProductList from "./products/ProductList";
import { getProducts } from "../services/productServices";
import { useState, useEffect } from "react";
import AddProduct from "./products/AddProduct";

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
};

const PageProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const products = await getProducts();
      setProducts(products);
    } catch (error) {
      setError(true);
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="w-full lg:px-20 px-8 lg:py-10 py-5">
      <h1 className="text-3xl font-bold mb-4">Crud Express</h1>
      <AddProduct />
      {error ? (
        <p className="text-red-500">Error fetching products. Please try again later.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductList key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PageProduct;