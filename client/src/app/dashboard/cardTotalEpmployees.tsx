import React from "react";

/**
 * CardTasks component
 *
 * @param title - The title of the card
 * @param primaryIcon - The primary icon of the card
 * @param stats - The stats to display in the card
 * @param dateRange - The date range for the stats
 *
 * @returns The CardTasks component
 */
const CardTasks = (
) => {
  return (
    <div className="row-span-2 xl:row-span-2 bg-white shadow-md rounded-2xl flex flex-col p-2 space-y-1">
      <div className="p-[8px]">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Total Employees</h2>
          <button
            className="text-gray-400 hover:text-gray-600 focus:outline-none"
            title="More information about conversion rate"
          >
            ℹ️
          </button>
        </div>

        <div>
          <div className="flex items-center">
            <h3 className="text-xl font-bold text-gray-900">5.28%</h3>
            <span className="text-sm text-red-500 ml-4">▼ 0.5% from last month</span>
          </div>
          <div className="mt-1 w-full bg-gray-200 rounded-full h-3">
            <div
              className="h-full bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 w-36 rounded-full"
            ></div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="h-3 w-3 rounded-full bg-red-500 mr-4"></span>
              <p className="text-sm text-gray-700">New employees</p>
            </div>
            <div className="text-sm font-medium text-green-400">
            ▲ <span className="text-gray-500">{3.21}% </span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="h-3 w-3 rounded-full bg-yellow-500 mr-4"></span>
              <p className="text-sm text-gray-700">Trainees</p>
            </div>
            <div className="text-sm font-medium text-red-700">
            ▼ <span className="text-gray-500">{5.79}% </span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="h-3 w-3 rounded-full bg-green-500 mr-4"></span>
              <p className="text-sm text-gray-700">Partners</p>
            </div>
            <div className="text-sm font-medium text-green-400">
              ▲ <span className="text-gray-500">{4.39}% </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTasks;
