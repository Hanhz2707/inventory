"use client";

import React, { useState } from "react";
import {
  useCreateProductMutation,
  useGetProductsQuery,
} from "../redux/state/api";
import { SearchIcon } from "lucide-react";
import { Rating } from "@mui/material";
import CreateProductModal from "./createProductModal";
import Image from "next/image";
// import img1 from "/Code/Project/Thesis/client/public/images/images (1).jpg";
// import img2 from "/Code/Project/Thesis/client/public/images/images (2).jpg";
// import img3 from "/Code/Project/Thesis/client/public/images/images (3).jpg";
// import img4 from "/Code/Project/Thesis/client/public/images/images (4).jpg";

/**
 * Type for the ProductFormData
 */
interface ProductFormData {
  name: string;
  price: number;
  stockQuantity: number;
  rating: number;
}

const Products = () => {
  const [search, setSearch] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, isError } = useGetProductsQuery(search);

  const [createProduct] = useCreateProductMutation();

  // const imgArray = [img1, img2, img3, img4];

  // const getRandomImage = () => {
  //   return imgArray[Math.floor(Math.random() * imgArray.length)];
  // };


  /**
   * Function to handle the create product event
   *
   * @param productData - Type ProductFormData
   */
  const handleCreateProduct = async (productData: ProductFormData) => {
    await createProduct(productData).unwrap();
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError || !data) return <div>Error</div>;

  return (
    <div className="mx-auto pb-5 w-full">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="flex items-center border-2 border-gray-200 rounded">
          <SearchIcon className="w-6 h-6 ml-2 text-gray-500 m-2" />
          <input
            className="w-full py-2 px-4 rounded bg-white"
            placeholder="Search your products here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-between items-center p-4 rounded-md ">
        <h1 className="text-3xl font-extrabold ">Products</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-5 py-2 bg-gray-800 text-white text-sm font-bold uppercase rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-600 transition-all duration-200"
        >
          Add Product
        </button>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-between ">
        {isLoading ? (
          <div>Loading....</div>
        ) : (
          data.map((product) => (
            <div
              key={product.productId}
              className="bg-white shadow-xl rounded-lg overflow-hidden"
            >
              <div className="w-full h-56 bg-cover bg-center justify-center items-center flex">
                <Image
                  src={`https://s3-inventoryhuyanhpham.s3.eu-north-1.amazonaws.com/product${
                    Math.floor(Math.random() * 10) + 1
                  }.jpg`}
                  // src={getRandomImage()}
                  width={200}
                  height={200}
                  alt={product.name}
                />
              </div>
              <div className="p-4">
                <h1 className="text-gray-900 font-bold text-xl">
                  {product.name}
                </h1>
                <p className="mt-2 text-gray-600 text-sm">
                  Stock: {product.stockQuantity}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <h1 className="text-gray-700 font-bold">€{product.price}</h1>
                  <Rating value={product.rating} readOnly />
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      <CreateProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateProduct}
      />
    </div>
  );
};

export default Products;
