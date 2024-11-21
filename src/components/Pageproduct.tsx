import { useState, useEffect } from "react";
import { getProducts } from "../services/productServices";
import ProductList from "./products/ProductList";
import SkeletonCard from "../components/skeleton/SekeltonCard"; 
import Navbar from "./Layouts/Navbar";

type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  createdAt: string;
};

const PageProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        const sortedProducts = response.sort(
          (a: Product, b: Product) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
  
        setProducts(sortedProducts);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.error("Error fetching products:", error);
      }
    };
  
    fetchProducts();
  }, []);
  

  return (
    <>
    <Navbar />
      <div className="w-full lg:py-10 py-5">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-2xl font-bold mb-4">Product List</h1>
          {error ? (
            <p className="text-red-500">
              Error fetching products. Please try again later.
            </p>
          ) : loading ? (
            <SkeletonCard />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.length === 0 && (
                <p className="text-gray-500">Tidak Ada Products.</p>
              )}
              {products.map((product) => (
                <ProductList key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PageProduct;
