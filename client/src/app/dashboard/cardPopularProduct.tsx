import React from "react";
import { useGetDashboardQuery } from "../redux/state/api";
import ProductRate from "../components/rating/rating";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

const CardPopularProduct = () => {
  const { data, isLoading } = useGetDashboardQuery();

  return (
    <div className="row-span-3 xl:row-span-6 bg-white shadow-lg rounded-2xl pb-16 px-8 pt-6">
      {isLoading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <>
          {/* Header */}
          <h3 className="text-xl font-semibold text-gray-800 pb-4 border-b">
            Popular Products
          </h3>

          {/* Product List */}
          <div className="overflow-y-auto h-full mt-4">
            {data?.popularProducts.map((product) => (
              <div
                key={product.productId}
                className="flex items-center justify-between gap-4 py-4 border-b last:border-none"
              >
                {/* Left Side: Image + Info */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Image
                      src={`https://s3-inventoryhuyanhpham.s3.eu-north-1.amazonaws.com/product${
                        Math.floor(Math.random() * 10) + 1
                      }.jpg`}
                      width={100}
                      height={100}
                      alt={product.name}
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-700 text-sm">
                      {product.name}
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                      <span className="font-bold text-gray-800">
                        {product.price}€
                      </span>
                      <span>|</span>
                      <ProductRate rating={product.rating} />
                    </div>
                  </div>
                </div>

                {/* Right Side: Button + Stock */}
                <div className="flex items-center gap-3">
                  <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 transition">
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
