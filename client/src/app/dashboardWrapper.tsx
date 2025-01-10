"use client";

import React, { ReactNode } from "react";
import StoreProvider from "./redux/provider/storeprovider";
import DashboardLayout from "./dashboardLayout";

/**
 * Type for the DashboardWrapperProps
 */
interface DashBoardWrapperProps {
  children: ReactNode;
}

/**
 * Dashboard Wrapper component
 *
 * @param children - The children to render
 *
 * @returns The Dashboard Wrapper component
 */
const DashBoardWrapper = ({ children }: DashBoardWrapperProps) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashBoardWrapper;
