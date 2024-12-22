import React, { useState } from "react";
import { useGetDashboardQuery } from "../redux/state/api";
import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const cardSaleSummary = () => {
  const { data, isLoading, isError } = useGetDashboardQuery();

  const saleData = data?.saleSummary || [];

  const [timeFrame, setTimeFrame] = useState("weekly");

  const totalValueSum =
    saleData.reduce((acc, curr) => acc + curr.totalValue, 0) || 0;

  const averageChangePercentage =
    saleData.reduce((acc, curr, _, arr) => {
      return acc + curr.changePercentage! / arr.length;
    }, 0) || 0;

  const highestValueData = saleData.reduce((acc, curr) => {
    return acc.totalValue > curr.totalValue ? acc : curr;
  }, saleData[0] || {});

  const highestValueDate = highestValueData.date
    ? new Date(highestValueData.date).toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "2-digit",
      })
    : "N/A";

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
            <hr />
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
            {/* Chart */}
            <ResponsiveContainer width="100%" height={350} className={"px-7"}>
              <BarChart
                data={saleData}
                margin={{ top: 0, right: 0, left: -25, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray={""} vertical={true} />
                <XAxis
                  dataKey="date"
                  tickFormatter={(value) => {
                    const date = new Date(value);
                    return `${date.getMonth() + 1}.${date.getDate()}`;
                  }}
                />
                <YAxis
                  tickFormatter={(value) => {
                    return `${(value / 1000000).toFixed(0)}M€`;
                  }}
                  tick={{ fontSize: 10, dx: -1 }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  formatter={(value) => [`${value.toLocaleString("en")}€`, ""]}
                />
                <Bar
                  dataKey="totalValue"
                  fill="#3182ce"
                  barSize={10}
                  radius={[10, 10, 0, 0]}
                ></Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Footer */}
          <div>
            <hr />
            <div className="flex justify-between items-center mt-6 text-sm px-7 mb-4">
              <p>{saleData.length || 0} days</p>
              <p className="text-sm">
                Highest Sale Date: {""}
                <span className="font-bold">{highestValueDate}</span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default cardSaleSummary;
