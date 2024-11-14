"use client";

import React, { ReactNode } from "react";
import StoreProvider from "./redux/provider/storeprovider";
import DashboardLayout from "./dashboardLayout";

interface DashBoardWrapperProps {
  children: ReactNode;
}

const DashBoardWrapper = ({ children }: DashBoardWrapperProps) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashBoardWrapper;
