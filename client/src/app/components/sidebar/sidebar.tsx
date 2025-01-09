"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux/types/types";
import {
  Archive,
  CircleDollarSign,
  Clipboard,
  Layout,
  Menu,
  SlidersHorizontal,
  User,
} from "lucide-react";
import React from "react";
import { setIsSidebarCollapsed } from "../../redux/state/index";
import SidebarLink from "./sidebarlink";
import Image from "next/image";

const SideBar = () => {
  const dispatch = useAppDispatch();

  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSideBarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const sidebarClassNames = `fixed flex flex-col ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

  return (
    <div className={sidebarClassNames}>
      {/* TOP */}
      <div
        className={`flex justify-between gap-3 md:justify-normal items-center pt-8 ${
          isSidebarCollapsed ? "px-5" : "px-8"
        } `}
      >
        <Image
          src="https://s3-inventoryhuyanhpham.s3.eu-north-1.amazonaws.com/logo3.png"
          width={200}
          height={200}
          alt="Logo"
        />
        {/* <h1
          className={`${
            isSidebarCollapsed ? "hidden" : "block"
          } font-extrabold text-2xl`}
        >
          Bitis
        </h1> */}
        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* Links */}
      <div className="flex-grow-8 mt-8">
        <SidebarLink
          href="/dashboard"
          icon={Layout}
          label="Dashboard"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/inventory"
          icon={Archive}
          label="Inventory"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/products"
          icon={Clipboard}
          label="Product"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/users"
          icon={User}
          label="Users"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/settings"
          icon={SlidersHorizontal}
          label="Settings"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/expenses"
          icon={CircleDollarSign}
          label="Expenses"
          isCollapsed={isSidebarCollapsed}
        />
      </div>

      {/* Footers */}
      <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10"`}>
        <p className="text-center text-xs text-gray-500">
          &copy; 2025 BitisHunterFI
        </p>
      </div>
    </div>
  );
};

export default SideBar;
