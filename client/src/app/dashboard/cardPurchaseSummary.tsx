import React from "react";
import { useGetDashboardQuery } from "../redux/state/api";
import numeral from "numeral";
import { TrendingDown, TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CardPurchaseSummary = () => {
  const { data, isLoading } = useGetDashboardQuery();
  const purchaseData = data?.purchaseSummary || [];
  const lastDataPoint = purchaseData[purchaseData.length - 1] || {};

  return (
    <div className="flex flex-col justify-between row-span-3 xl:row-span-3 bg-white shadow-lg rounded-xl ">
      {isLoading ? (
        <div className="flex justify-center items-center py-20 text-gray-500">
          Loading...
        </div>
      ) : (
        <>
          {/* Header */}
          <div className="px-6 py-4 border-b">
            <h2 className="text-base font-bold text-gray-800">
              Purchase Summary
            </h2>
          </div>

          {/* Body */}
          <div className="px-6 py-4 flex flex-col gap-4">
            {/* Metrics */}
            <div className="flex flex-col gap-1">
              <p className="text-xs text-gray-400">Purchased</p>
              <div className="flex items-center">
                <p className="text-2xl font-extrabold text-gray-800">
                  {lastDataPoint
                    ? numeral(lastDataPoint.totalPurchased / 1000000).format(
                        "0.0"
                      )
                    : "0"}{" "}
                  M€
                </p>
                {lastDataPoint && (
                  <div
                    className={`ml-4 flex items-center text-sm ${
                      lastDataPoint.changePercentage! >= 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {lastDataPoint.changePercentage! >= 0 ? (
                      <TrendingUp className="w-4 h-4 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 mr-1" />
                    )}
                    {Math.abs(lastDataPoint.changePercentage!)}%
                  </div>
                )}
              </div>
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height={150}>
              <AreaChart
                data={purchaseData}
                margin={{ top: 20, right: 15, left: -20, bottom: 30 }}
              >
                <XAxis
                  dataKey="date"
                  tickFormatter={(value) => {
                    const date = new Date(value);
                    return `${date.getMonth() + 1}/${date.getDate()}`;
                  }}
                  tick={{ fontSize: 10, fill: "#9ca3af" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tickFormatter={(value) => `${value / 1000000}M`}
                  tick={{ fontSize: 10, fill: "#9ca3af" }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  formatter={(value: number) => [`${value.toLocaleString()}€`]}
                  labelFormatter={(label) => {
                    const date = new Date(label);
                    return date.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    });
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="totalPurchased"
                  stroke="#4f46e5"
                  fill="rgba(79, 70, 229, 0.2)"
                  dot={{ r: 4, fill: "#4f46e5", strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default CardPurchaseSummary;
