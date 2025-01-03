"use client";

import React, { useState } from "react";
import { useGetProductsQuery } from "../redux/state/api";

const Products = () => {
  const [search, setSearch] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, isError } = useGetProductsQuery(search);

  if (isLoading) return <div>Loading...</div>;

  if (isError || !data) return <div>Error</div>;

  return <div className="mx-auto pb-5 w-full">Products</div>;
};

export default Products;
