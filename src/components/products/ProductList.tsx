import React from "react";
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProduct";
import { formatToRupiah } from "../../libs/utils";

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
};

interface ProductProps {
  product: Product;
}

const ProductList: React.FC<ProductProps> = ({ product }) => {
  const handleDeleteSuccess = () => {
    try {
      window.location.reload();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div key={product.id} className="border p-4 rounded-lg shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-2"
      />
      <div className="flex flex-col">
        <span className="font-bold text-lg">{product.name}</span>
        <span className="text-gray-600 font-semibold">{formatToRupiah(product.price)}</span>
        <p className="text-gray-700 mt-2">{product.description}</p>
        <div className="flex gap-4 mt-5 justify-end">
          <DeleteProduct
            product={product}
            onDeleteSuccess={handleDeleteSuccess}
          />
          <EditProduct productId={product.id} isOpen={true} onClose={handleDeleteSuccess} />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
