"use client";

import React from "react";
import { useGetProductsQuery, useGetUsersQuery } from "../redux/state/api";
import Header from "../components/header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

const columns: GridColDef[] = [
  { field: "userId", headerName: "ID", width: 300 },
  { field: "name", headerName: "Product Name", width: 150 },
  { field: "email", headerName: "Email", width: 150 },
];

const UsersPage = () => {
  const { data, isError, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error</div>;
  }

  return (
    // <div className="flex flex-col">
    //   <Header name="Inventory" />
    //   <Box sx={{ height: "100%", width: "100%" }}>
    //     <DataGrid
    //       rows={data}
    //       columns={columns}
    //       getRowId={(row) => row.productId}
    //       checkboxSelection
    //     />
    //   </Box>
    // </div>
    <div className="flex flex-col space-y-4 p-6 bg-gray-50 rounded-lg shadow-lg h-full">
      {/* Header */}
      <Header name="Users" />

      {/* Data Grid */}
      <Box
        sx={{
          height: "75vh",
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "1px solid #e5e7eb",
            color: "#374151",
            fontSize: "0.875rem",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#f9fafb",
            color: "#111827",
            fontWeight: "600",
            textTransform: "uppercase",
            fontSize: "0.875rem",
            borderBottom: "1px solid #e5e7eb",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "700",
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#f3f4f6",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "#f9fafb",
            borderTop: "1px solid #e5e7eb",
          },
        }}
      >
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={(row) => row.userId}
          checkboxSelection
        />
      </Box>
    </div>
  );
};

export default UsersPage;
