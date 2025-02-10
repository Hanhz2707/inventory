import React from "react";
import { SocialIcon } from "react-social-icons";

const cardSocialMedia = (
) => {
  return (
    <div className="row-span-2 xl:row-span-2 col-span-1 md:col-span-1 xl:col-span-1 bg-white shadow-md rounded-2xl flex flex-col justify-between p-2">
      <div className="p-[8px]">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Advertising Social Media</h2>
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
          <div className="mt-1 w-full bg-gray-200 rounded-full h-3 mb-1">
            <div
            className="h-full bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 w-80 rounded-full"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-1">
              <SocialIcon url="https://x.com/" 
              bgColor="#000000" 
              fgColor="#ffffff" 
              style={{ height: "15px", width: "15px" }} />
              <p className="text-sm text-gray-700">X (Twitter)</p>
            </div>
            <div className="text-sm font-medium text-green-400">
            ▲ <span className="text-gray-500">{3.59}%</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1">
              <SocialIcon url="https://facebook.com/" 
              bgColor="#000000" 
              fgColor="#ffffff" 
              style={{ height: "15px", width: "15px" }} />
              <p className="text-sm text-gray-700">Facebook</p>
            </div>
            <div className="text-sm font-medium text-red-700">
            ▼ <span className="text-gray-500">{2.79}%</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1">
              <SocialIcon url="https://instagram.com/" 
              bgColor="#000000" 
              fgColor="#ffffff" 
              style={{ height: "15px", width: "15px" }} />
              <p className="text-sm text-gray-700">Instagram</p>
            </div>
            <div className="text-sm font-medium text-green-400">
            ▲ <span className="text-gray-500">{4.19}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cardSocialMedia;
