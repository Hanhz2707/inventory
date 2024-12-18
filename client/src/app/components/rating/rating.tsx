import { Star } from "lucide-react";
import React from "react";

interface ProductRateProps {
  rating: number;
}

const ProductRate = ({ rating }: ProductRateProps) => {
  return [1, 2, 3, 4, 5].map((index) => (
    <Star
      key={rating}
      size={20}
      className={`${
        index <= rating ? "text-yellow-500" : "text-gray-200"
      } cursor-pointer`}
    />
  ));
};

export default ProductRate;
