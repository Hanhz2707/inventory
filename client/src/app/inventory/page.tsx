"use client";

import React from "react";
import { useGetProductsQuery } from "../redux/state/api";
import Header from "../components/header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

const columns: GridColDef[] = [
  { field: "productId", headerName: "ID", width: 300 },
  { field: "name", headerName: "Product Name", width: 150 },
  {
    field: "price",
    headerName: "Price",
    width: 150,
    type: "number",
    valueGetter: (value, row) => `€${row.price}`,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 150,
    type: "number",
    valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
  },
  {
    field: "stockQuantity",
    headerName: "Stock Quantity",
    width: 150,
    type: "number",
  },
];

const InventoryPage = () => {
  const { data, isError, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error</div>;
  }

  return (
    <div className="flex flex-col">
      <Header name="Inventory" />
      <Box sx={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={(row) => row.productId}
          checkboxSelection
        />
      </Box>
    </div>
  );
};

export default InventoryPage;
