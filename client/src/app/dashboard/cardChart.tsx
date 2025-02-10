import React, { useState } from "react";
import {
  Funnel,
  FunnelChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const mockData = [
  { name: "Salary", value: 30000 },
  { name: "Furniture", value: 17000 },
  { name: "Delivery", value: 20000 },
  { name: "Rent", value: 16000 },
];

const CardSaleSummary = () => {
  const saleData = mockData;

  const totalValueSum = saleData.reduce((acc, curr) => acc + curr.value, 0) || 0;

  return (
    <div className="row-span-3 xl:row-span-3 bg-white shadow-md rounded-lg flex flex-col justify-between">
      {/* Header */}
      <div className="px-8 py-3 border-b">
        <h2 className="text-base font-bold text-gray-700">Monthly Expense</h2>
      </div>

      {/* Body */}
      <div className="flex flex-col px-8">
        {/* Metrics Row */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Total Value</p>
            <div className="text-2xl font-extrabold text-gray-700 flex items-center">
              {totalValueSum.toLocaleString("en")}
              €
            </div>
          </div>
        </div>

        {/* Funnel Chart */}
        <div className="h-32 flex justify-center items-center">
          <ResponsiveContainer width="80%" height="80%">
            <FunnelChart>
              <Tooltip formatter={(value) => `${value.toLocaleString("en")}€`} />
              <Funnel dataKey="value" data={saleData} isAnimationActive fill="#3182CE">
                <LabelList position="right" fill="#1E40AF" stroke="none" dataKey="name" fontWeight="bold" />
              </Funnel>
            </FunnelChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Footer */}
      <div className="px-8 pt-3 pb-3 border-t flex justify-between items-center text-sm">
        <p>Total Steps: <span className="font-semibold">{saleData.length}</span></p>
        <p>
          Total Leads: <span className="font-semibold">{saleData[0]?.value || 0}</span>
        </p>
      </div>
    </div>
  );
};

export default CardSaleSummary;
