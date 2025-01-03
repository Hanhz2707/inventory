"use client";

import React, { useState } from "react";
import { useGetProductsQuery } from "../redux/state/api";
import { SearchIcon } from "lucide-react";

const Products = () => {
  const [search, setSearch] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, isError } = useGetProductsQuery(search);

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
    </div>
  );
};

export default Products;
