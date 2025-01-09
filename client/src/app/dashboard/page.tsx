"use client";

import React from "react";
import CardPopularProduct from "./cardPopularProduct";
import CardSaleSummary from "./cardSaleSummary";
import { Card } from "@mui/material";
import CardPurchaseSummary from "./cardPurchaseSummary";
import CardExpenseSummary from "./cardExpenseSummary";
import CardCustomer from "./cardCustomer";
import {
  CheckCircle,
  Clock,
  DollarSign,
  List,
  MessageCircle,
  Package,
} from "lucide-react";
import CardRevenue from "./cardCustomer";
import CardTasks from "./cardTasks";
import CardCollaboration from "./cardCollaboration";

const Dashboard = () => {
  const revenueStats = [
    { title: "Total Revenue", value: "$125,000", changePercentage: 12.5 },
    { title: "Growth Rate", value: "8%", changePercentage: 8 },
    { title: "Top Product", value: "Product A" },
  ];
  const taskStats = [
    { title: "Tasks Completed", value: "42", icon: CheckCircle },
    { title: "Tasks Pending", value: "10", icon: List },
    { title: "Avg Completion Time", value: "3h 25m", icon: Clock },
  ];
  const collaborationStats = [
    { title: "Messages Sent", value: "245", trendPercentage: 15 },
    { title: "Tasks Assigned", value: "32", trendPercentage: -8 },
    { title: "Files Shared", value: "18" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProduct />
      <CardSaleSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <CardRevenue
        title="Revenue and Performance"
        primaryIcon={<DollarSign size={24} />}
        stats={revenueStats}
        dateRange="Last 30 days"
      />
      <CardTasks
        title="Tasks and Productivity"
        primaryIcon={<CheckCircle size={24} />}
        stats={taskStats}
        dateRange="Last 7 days"
      />
      <CardCollaboration
        title="Team Collaboration"
        primaryIcon={<MessageCircle size={24} />}
        stats={collaborationStats}
        dateRange="This Week"
      />

      {/* <div className="md:row-span-1 xl:row-span-2 bg-gray-500"></div> */}
    </div>
  );
};

export default Dashboard;
