import React, { useState } from "react";
import { deleteProduct } from "../../services/productServices";

type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  createdAt: string;
};

interface DeleteProductProps {
  product: Product;
  onDeleteSuccess: () => void;
}

const DeleteProduct: React.FC<DeleteProductProps> = ({
  product,
  onDeleteSuccess,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteProduct(product.id);
      onDeleteSuccess();
      setShowModal(false);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-red-500 hover:bg-red-600 transition duration-300 text-white p-2 rounded"
      >
        Delete
      </button>

      {showModal && (
        <div className="fixed bg-black bg-opacity-50 inset-0 flex items-center justify-center z-50 px-2">
          <div className="bg-white w-full max-w-md p-4 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Confirm Delete</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 10.586l4.293-4.293a1 1 0 0 1 1.414 1.414L13.414 12l4.293 4.293a1 1 0 1 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 1.414-1.414L12 10.586z" />
                </svg>
              </button>
            </div>
            <p className="text-gray-700 mb-4">
              Kamu Yakin Ingin menghapus Product "{product.name}"?
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-700 px-4 mr-2 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded  hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteProduct;
