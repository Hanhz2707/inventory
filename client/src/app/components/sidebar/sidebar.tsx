import { Menu } from "lucide-react";
import React from "react";

const SideBar = () => {
  return (
    <div>
      {/* TOP */}
      <div className="flex justify-between gap-3 md:justify-normal items-center pt-8">
        <div>logo</div>
        <h1 className="font-extrabold text-2xl">Bitis</h1>
        <button className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100">
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* Links */}
      <div className="flex-grow-8 mt-8"></div>

      {/* Footers */}
      <div>
        <p className="text-center text-xs text-gray-500">
          &copy; 2024 BitisHunterFI
        </p>
      </div>
    </div>
  );
};

export default SideBar;
