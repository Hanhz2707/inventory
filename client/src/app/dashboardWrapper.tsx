import React, { ReactNode } from "react";
import Navbar from "./components/navbar/navbar";
import SideBar from "./components/sidebar/sidebar";

interface DashBoardWrapperProps {
  children: ReactNode;
}

const DashBoardWrapper = ({ children }: DashBoardWrapperProps) => {
  return (
    <div className="light flex bg-gray-50 text-gray-900 w-full min-h-screen">
      <SideBar />
      <main className="flex flex-col w-full h-full py-7 px-9 bg-gray-50 md:pl-24">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashBoardWrapper;
