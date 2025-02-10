
import React, { useState } from "react";





const SessionByLocation = () => {


  return (
    <div className="row-span-2 xl:row-span-2 bg-white shadow-md rounded-2xl flex flex-col p-2 space-y-1  justify-center">
      <div className="p-[8px]">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Delivery Order</h2>
          <button
            className="text-gray-400 hover:text-gray-600 focus:outline-none"
            title="More information about conversion rate"
          >
            ℹ️
          </button>
        </div>

        <div>
          <div className="flex items-center">
            <h3 className="text-xl font-bold text-gray-900">2.19%</h3>
            <span className="text-sm text-red-500 ml-4">▼ 0.5% from last week</span>
          </div>
          <div className="mt-1 w-full bg-gray-200 rounded-full h-3">
            <div
              className="h-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 w-2/3 rounded-full"
            ></div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="h-3 w-3 rounded-full bg-green-600 mr-4"></span>
              <p className="text-sm ">Completed</p>
            </div>
            <div className="text-sm font-medium text-gray-800">
              ▼ <span className="text-gray-500">{5.79}% </span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="h-3 w-3 rounded-full bg-yellow-500 mr-4"></span>
              <p className="text-sm text-gray-700">Pending</p>
            </div>
            <div className="text-sm font-medium text-gray-800">
              ▼ <span className="text-gray-500">{5.79}% </span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="h-3 w-3 rounded-full bg-red-600 mr-4"></span>
              <p className="text-sm text-gray-700">Canceled</p>
            </div>
            <div className="text-sm font-medium text-gray-800">
              ▼ <span className="text-gray-500">{5.79}% </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionByLocation;