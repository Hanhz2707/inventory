"use client";

import React, { useMemo, useState } from "react";
import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts";
import {
  ExpenseByCategorySummary,
  useGetExpenseByCategoryQuery,
} from "../redux/state/api";

interface ExpenseCategoriesItem {
  name: string;
  color?: string;
  amount: number;
}

interface ExpenseCategories {
  [category: string]: ExpenseCategoriesItem;
}

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28CF2"];

const ExpensePage = () => {
  const { data, isLoading, isError } = useGetExpenseByCategoryQuery();

  // State for filters
  const [activeIndex, setActiveIndex] = useState(0);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const expenses = useMemo(() => data ?? [], [data]);

  const parseDate = (datestring: string) => {
    const date = new Date(datestring);
    return date.toLocaleDateString().split("T")[0];
  };

  const totalExpenses = useMemo(() => {
    return expenses.reduce((acc, data) => acc + parseInt(data.amount), 0);
  }, [expenses]);

  const expenseCategories: ExpenseCategoriesItem[] = useMemo(() => {
    const categories: ExpenseCategories = expenses
      .filter((data: ExpenseByCategorySummary) => {
        const matchesCategory =
          categoryFilter === "All" || data.category === categoryFilter;
        const dateDate = parseDate(data.date);
        const matchesDate =
          !startDate ||
          !endDate ||
          (dateDate >= startDate && dateDate <= endDate);
        return matchesCategory && matchesDate;
      })
      .reduce((acc: ExpenseCategories, data: ExpenseByCategorySummary) => {
        const amount = parseInt(data.amount);
        if (!acc[data.category]) {
          acc[data.category] = { name: data.category, amount };
          acc[data.category].color =
            colors[Object.keys(acc).length % colors.length];
          acc[data.category].amount += amount;
        }
        return acc;
      }, {});
    return Object.values(categories);
  }, [expenses, categoryFilter, startDate, endDate]);

  // Improved Loading and Error Handling UI
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex items-center">
          <span className="loader mr-2"></span>
          <span className="text-lg text-gray-600">Loading...</span>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600">Error</h2>
          <p className="text-gray-500 mt-2">
            Something went wrong while fetching data. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Expense Dashboard</h1>
        <p className="text-sm text-gray-500">
          Track and analyze your expenses effectively.
        </p>
      </div>
      {/* Filters Section */}
      <div className="mb-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Filter by Category and Date
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Category
            </label>
            <select
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="All">All</option>
              {expenses.map((expense) => (
                <option
                  key={expense.expenseByCategorySummaryId}
                  value={expense.category}
                >
                  {expense.category}
                </option>
              ))}
            </select>
          </div>

          {/* Start Date Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Start Date
            </label>
            <input
              type="date"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="YYYY-MM-DD"
            />
          </div>

          {/* End Date Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              End Date
            </label>
            <input
              type="date"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="YYYY-MM-DD"
            />
          </div>
        </div>
      </div>

      {/* Summary and Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Summary */}
        <div className="col-span-1 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-700">Summary</h2>
          <p className="text-3xl font-bold text-gray-800 mt-4">
            €{totalExpenses.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Total expenses in the last month.
          </p>
          <ul className="mt-6">
            {expenses.map((category, index) => (
              <li
                key={category.expenseByCategorySummaryId}
                className="flex items-center justify-between mb-4"
              >
                <span className="flex items-center">
                  <span
                    className="inline-block w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: colors[index % colors.length] }}
                  ></span>
                  {category.category}
                </span>
                <span className="text-gray-700 font-medium">
                  €{category.amount.toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pie Chart */}
        <div className="col-span-2 bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <ResponsiveContainer width="90%" height={400}>
            <PieChart width={400}>
              <Pie
                data={expenseCategories}
                dataKey="amount"
                onMouseEnter={(_, index) => setActiveIndex(index)}
                cx="50%"
                cy="50%"
                outerRadius={100}
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

          {/* Legend */}
          <div className="mt-4 flex flex-wrap justify-center">
            {expenseCategories.map((entry, index) => (
              <div key={`legend-${index}`} className="flex items-center mx-2">
                <span
                  className="inline-block w-4 h-4 rounded-full mr-2"
                  style={{ backgroundColor: colors[index % colors.length] }}
                ></span>
                <span className="text-sm text-gray-700">{entry.name}</span>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              The largest category is{" "}
              <strong>{expenseCategories[0]?.name}</strong> with €
              {expenseCategories[0]?.amount.toLocaleString()}.
            </p>
          </div>
        </div>
      </div>

      {/* Expense Table */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Expense Details
        </h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Category
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Date
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Amount
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr
                key={expense.expenseByCategorySummaryId}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="px-4 py-2 text-sm text-gray-700">
                  {expense.category}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {new Date(expense.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  €{expense.amount.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpensePage;
