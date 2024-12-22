import React, { useState } from "react";
import { useGetDashboardQuery } from "../redux/state/api";
import { TrendingUp } from "lucide-react";

const cardSaleSummary = () => {
  const { data, isLoading, isError } = useGetDashboardQuery();

  const saleData = data?.saleSummary || [];

  console.log("Here is data", data);

  console.log("Here is sale data", saleData);

  const [timeFrame, setTimeFrame] = useState("weekly");

  const totalValueSum =
    saleData.reduce((acc, curr) => acc + curr.totalValue, 0) || 0;

  const averageChangePercentage =
    saleData.reduce((acc, curr, _, arr) => {
      return acc + curr.changePercentage! / arr.length;
    }, 0) || 0;

  console.log("Here is total value", totalValueSum);

  return (
    <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl flex flex-col justify-between">
      {isLoading ? (
        <div className="m-5">Loading....</div>
      ) : (
        <>
          {/* Header */}
          <div>
            <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
              Sale Summary
            </h2>
          </div>

          {/* Body */}
          <div>
            <div className="flex justify-between items-center mb-6 px-7">
              <div className="text-lg font-medium">
                <p className="text-xs text-gray-400">Value</p>
                <span className="text-2xl font-extrabold">
                  {(totalValueSum / 1000000).toLocaleString("en", {
                    maximumFractionDigits: 2,
                  })}
                  M€
                </span>
                <span className="text-green-500 text-sm ml-2">
                  <TrendingUp className="inline w-4 h-4 mr-1" />
                  {averageChangePercentage.toFixed(2)}%
                </span>
              </div>
              <select
                className="border border-gray-300 rounded p-2 shadow-sm bg-white"
                value={timeFrame}
                onChange={(e) => setTimeFrame(e.target.value)}
              >
                <option value="daily">Daily</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default cardSaleSummary;
