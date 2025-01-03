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

const CardSaleSummary = () => {
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
    <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-lg flex flex-col justify-between">
      {isLoading ? (
        <div className="text-center py-10 text-gray-500">Loading...</div>
      ) : (
        <>
          {/* Header */}
          <div className="px-6 py-4 border-b">
            <h2 className="text-lg font-bold text-gray-700">Sale Summary</h2>
          </div>

          {/* Body */}
          <div className="flex flex-col px-6 py-4">
            {/* Metrics Row */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-xs text-gray-400">Total Value</p>
                <div className="text-2xl font-extrabold text-gray-700 flex items-center">
                  {(totalValueSum / 1000000).toLocaleString("en", {
                    maximumFractionDigits: 2,
                  })}
                  M€
                  <span className="ml-2 text-sm text-green-500 flex items-center">
                    <TrendingUp size={16} className="mr-1" />
                    {averageChangePercentage.toFixed(2)}%
                  </span>
                </div>
              </div>
              <select
                className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-600 bg-white shadow-sm"
                value={timeFrame}
                onChange={(e) => setTimeFrame(e.target.value)}
              >
                <option value="daily">Daily</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>

            {/* Chart */}
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={saleData}
                  margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="date"
                    tickFormatter={(value) => {
                      const date = new Date(value);
                      return `${date.getMonth() + 1}.${date.getDate()}`;
                    }}
                    tick={{ fontSize: 10, fill: "#6b7280" }}
                  />
                  <YAxis
                    tickFormatter={(value) =>
                      `${(value / 1000000).toFixed(0)}M€`
                    }
                    tick={{ fontSize: 10, fill: "#6b7280" }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    formatter={(value) => [
                      `${value.toLocaleString("en")}€`,
                      "",
                    ]}
                  />
                  <Bar
                    dataKey="totalValue"
                    fill="#3182ce"
                    barSize={10}
                    radius={[10, 10, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t flex justify-between items-center text-sm text-gray-500">
            <p>{saleData.length || 0} days</p>
            <p>
              Highest Sale Date:{" "}
              <span className="font-semibold text-gray-700">
                {highestValueDate}
              </span>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default CardSaleSummary;
