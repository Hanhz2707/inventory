import React from "react";
import {
  ExpenseByCategorySummary,
  useGetDashboardQuery,
} from "../redux/state/api";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";

const colors = ["#00C49F", "#0088FE", "#FFBB28"];

/**
 * Type for the ExpenseSum
 */
type ExpenseSum = {
  [category: string]: number;
};

const CardExpenseSummary = () => {
  const { data, isLoading } = useGetDashboardQuery();

  const expenseByCategory = data?.expenseByCategorySummary || [];

  const expenseSum = expenseByCategory.reduce(
    (acc: ExpenseSum, curr: ExpenseByCategorySummary) => {
      const category = curr.category + "Expense";
      console.log(category);
      const amount = parseInt(curr.amount, 10);
      console.log(amount);
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category] += amount;
      console.log(acc);
      return acc;
    },
    {}
  );

  const expenseCategories = Object.entries(expenseSum).map(([name, value]) => ({
    name,
    value,
  }));

  const expenseSummary = data?.expenseSummary[0];

  return (
    <div className="md:row-span-1 xl:row-span-3 bg-white shadow-md rounded-2xl flex flex-col justify-between">
      {isLoading ? (
        <div className="m-5">Loading...</div>
      ) : (
        <>
          {/* Header */}
          <div>
            <h2 className="text-base font-bold text-gray-700 mb-2 px-7 pt-5">
              Expense Summary
            </h2>
            <hr />
          </div>
          {/* Body */}
          <div className="xl:flex justify-between pr-7">
            {/* Charts */}
            <div className="relative basis-3/5">
              <ResponsiveContainer width="100%" height={140}>
                <PieChart>
                  <Pie
                    data={expenseCategories}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={50}
                    fill="#8884d8"
                    label
                  >
                    {expenseCategories.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={colors[index % colors.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            {/* Label */}
            <ul className="flex flex-col justify-around items-center xl:items-start py-5 gap-3">
              {expenseCategories.map((category, index) => (
                <li key={index}>
                  <span
                    className="rounded-full inline-block w-3 h-3 mr-2 "
                    style={{ backgroundColor: colors[index] }}
                  ></span>
                  <span className="text-gray-700 font-semibold">
                    {category.name.replace("Expense", "")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* Footer */}
          <div>
            <hr />
            {expenseSummary && (
              <div className="mt-3 flex justify-between items-center px-7 mb-4">
                <div className="pt-2">
                  <p className="text-sm text-gray-400">
                    Average:{" "}
                    <span className="font-bold text-gray-700">
                      {(expenseSummary.totalExpenses / 1000000).toFixed(2)}M€
                    </span>
                  </p>
                </div>
                <span className="flex items-center text-green-500">
                  <TrendingUp className="mr-2 text-green-500" /> 35%
                </span>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CardExpenseSummary;
