"use client";

import React from "react";
import CardPopularProduct from "./cardPopularProduct";
import CardSaleSummary from "./cardSaleSummary";
import { Card } from "@mui/material";
import CardPurchaseSummary from "./cardPurchaseSummary";
import CardExpenseSummary from "./cardExpenseSummary";
import CardCustomer from "./cardCustomer";
import { Package } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProduct />
      <CardSaleSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <CardCustomer
        title="Customer and Expenses"
        primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
        dateRange="Last 30 days"
        details={[
          {
            title: "Customers",
            value: "1,200",
            changePercentage: 20,
            IconComponent: Package,
          },
          {
            title: "Expenses",
            value: "€ 3,000",
            changePercentage: -10,
            IconComponent: Package,
          },
        ]}
      />
      <CardCustomer
        title="Customer and Expenses"
        primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
        dateRange="Last 30 days"
        details={[
          {
            title: "Customers",
            value: "1,200",
            changePercentage: 20,
            IconComponent: Package,
          },
          {
            title: "Expenses",
            value: "€ 3,000",
            changePercentage: -10,
            IconComponent: Package,
          },
        ]}
      />
      <CardCustomer
        title="Customer and Expenses"
        primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
        dateRange="Last 30 days"
        details={[
          {
            title: "Customers",
            value: "1,200",
            changePercentage: 20,
            IconComponent: Package,
          },
          {
            title: "Expenses",
            value: "€ 3,000",
            changePercentage: -10,
            IconComponent: Package,
          },
        ]}
      />
      {/* <div className="md:row-span-1 xl:row-span-2 bg-gray-500"></div> */}
    </div>
  );
};

export default Dashboard;
