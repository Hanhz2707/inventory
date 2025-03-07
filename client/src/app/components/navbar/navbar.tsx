import React from "react";
import { Bell, ChevronDown, Mail, Menu, Moon, Settings, Sun } from "lucide-react";
import Link from "next/link";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/app/redux/state";
import { useAppDispatch, useAppSelector } from "@/app/redux/types/types";
import Image from "next/image";
// import avatar from "C:/Users/ADMIN/Downloads/avatar.png";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSideBarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  return (
    <div className="flex justify-between items-center w-full mb-7 p-4 bg-white shadow-md rounded-full">
      {/* Left Section - Sidebar Toggle and Search */}
      <div className="flex items-center gap-5">
        <button
          className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 focus:ring-2 focus:ring-blue-500"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </button>

        <div className="relative w-full max-w-xs hidden sm:block">
          <input
            type="search"
            placeholder="Search..."
            className="pl-12 pr-4 py-2 w-full border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Bell className="text-gray-500" size={20} />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? (
            <Moon className="text-gray-600" size={24} />
          ) : (
            <Sun className="text-gray-600" size={24} />
          )}
        </button>

      {/* Notification Bell */}
      <div className="flex items-center space-x-6">
      {/* Messages */}
      <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-800 transition-colors">
        <Mail className="text-gray-600" size={20} />
        <div className="hidden sm:flex items-center">
          <span className="text-sm font-medium text-gray-700">Message</span>
          <ChevronDown className="text-gray-600" size={16} />
        </div>

      </div>

      {/* Notifications */}
      <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-800 transition-colors">
        <Bell className="text-gray-600" size={20} />
        <div className="hidden sm:flex items-center">
        <span className="text-sm font-medium text-gray-700">Message</span>
        <ChevronDown className="text-gray-600" size={16} />
      </div>
      </div>
    </div>

        {/* Vertical Divider */}
        <div className="hidden md:block h-7 w-px bg-gray-300" />

        {/* Profile Section */}
        <div className="hidden md:flex items-center gap-3">
          <Image
            src={"https://s3-inventoryhuyanhpham.s3.eu-north-1.amazonaws.com/avatar.png"}
            width={40}
            height={40}
            className="rounded-full"
            alt="User Avatar"
          />
          <span className="font-medium text-gray-700">Hanhz</span>
        </div>

        {/* Settings Icon */}
        <Link
          href="/settings"
          className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 focus:ring-2 focus:ring-blue-500"
        >
          <Settings className="text-gray-600" size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
