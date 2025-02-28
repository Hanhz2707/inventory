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
import logo from "C:/Users/ADMIN/Downloads/logo1.png";

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
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-lg z-40`;

  return (
    <div className={sidebarClassNames}>
      {/* Top Section */}
      <div
        className={`flex items-center justify-between ${
          isSidebarCollapsed ? "px-5" : "px-8"
        } py-6`}
      >
        <div className={`flex items-center gap-2`}>
          <Image
            // src="https://s3-inventoryhuyanhpham.s3.eu-north-1.amazonaws.com/logo3.png"
            src={logo}
            width={isSidebarCollapsed ? 40 : 200}
            height={40}
            alt="Logo"
            className="transition-all duration-300"
          />
          {!isSidebarCollapsed}
        </div>
        <button
          className="md:hidden p-3 bg-gray-100 rounded-full hover:bg-gray-200 focus:ring-2 focus:ring-blue-500"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Links */}
      <div className="flex-grow mt-4 space-y-2">
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

      {/* Footer */}
      <div
        className={`${
          isSidebarCollapsed ? "hidden" : "block"
        } mt-auto px-4 py-6`}
      >
        <p className="text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} BitisHunterFI
        </p>
      </div>
    </div>
  );
};

export default SideBar;
