import React from "react";
import { useGetDashboardQuery } from "../redux/state/api";
import ProductRate from "../components/rating/rating";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
// import img1 from "/Code/Project/Thesis/client/public/images/images (1).jpg";
// import img2 from "/Code/Project/Thesis/client/public/images/images (2).jpg";
// import img3 from "/Code/Project/Thesis/client/public/images/images (3).jpg";
// import img4 from "/Code/Project/Thesis/client/public/images/images (4).jpg";

const CardPopularProduct = () => {
  const { data, isLoading } = useGetDashboardQuery();

  // const imgArray = [img1, img2, img3, img4];

  // const getRandomImage = () => {
  //   return imgArray[Math.floor(Math.random() * imgArray.length)];
  // };

  return (
    <div className="row-span-3 xl:row-span-3 md:col-span-2 xl:col-span-3 bg-white shadow-lg rounded-2xl pb-16 px-8 pt-6">
      {isLoading ? (
        <div className="text-center text-gray-500 py-6">Loading...</div>
      ) : (
        <>
          {/* Header */}
          <h3 className="text-2xl font-semibold text-gray-800 pb-4 border-b border-gray-200">
            Popular Products
          </h3>

          {/* Product List */}
          <div className="mt-4 max-h-[400px] overflow-y-auto space-y-4">
            {data?.popularProducts.map((product) => (
              <div
                key={product.productId}
                className="flex items-center justify-between gap-4 p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition"
              >
                {/* Left Side: Image + Info */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                    <Image
                      src={`https://s3-inventoryhuyanhpham.s3.eu-north-1.amazonaws.com/product${
                        Math.floor(Math.random() * 10) + 1
                      }.jpg`}
                      // src={getRandomImage()}
                      width={100}
                      height={100}
                      alt={product.name}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 text-base">
                      {product.name}
                    </h4>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                      <span className="font-bold text-gray-800 text-lg">
                        {product.price}€
                      </span>
                      <span className="text-gray-300">|</span>
                      <ProductRate rating={product.rating} />
                    </div>
                  </div>
                </div>

                {/* Right Side: Button + Stock */}
                <div className="flex items-center gap-3">
                  <button className="p-2 rounded-full bg-gray-200 hover:bg-blue-600 text-white transition shadow-md">
                    <ShoppingCart size={20} />
                  </button>
                  <span className="text-sm font-medium text-gray-600">
                    {Math.round(product.stockQuantity / 1000)}k Sold
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CardPopularProduct;