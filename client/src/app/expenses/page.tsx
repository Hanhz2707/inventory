"use client";
import React from "react";
import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts";

const mockData = {
  totalExpenses: 12500,
  expenseCategories: [
    { name: "Food", value: 3500 },
    { name: "Transport", value: 2500 },
    { name: "Utilities", value: 3000 },
    { name: "Entertainment", value: 1500 },
    { name: "Miscellaneous", value: 2000 },
  ],
  expenses: [
    {
      id: 1,
      category: "Food",
      date: "2025-01-01",
      amount: 500,
      status: "Paid",
    },
    {
      id: 2,
      category: "Transport",
      date: "2025-01-02",
      amount: 300,
      status: "Pending",
    },
    {
      id: 3,
      category: "Utilities",
      date: "2025-01-03",
      amount: 200,
      status: "Paid",
    },
    {
      id: 4,
      category: "Entertainment",
      date: "2025-01-04",
      amount: 700,
      status: "Paid",
    },
  ],
};

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28CF2"];

const ExpensePage = () => {
  const { totalExpenses, expenseCategories, expenses } = mockData;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Expense Dashboard</h1>
        <p className="text-sm text-gray-500">
          Track and analyze your expenses effectively.
        </p>
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
            {expenseCategories.map((category, index) => (
              <li
                key={category.name}
                className="flex items-center justify-between mb-4"
              >
                <span className="flex items-center">
                  <span
                    className="inline-block w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: colors[index % colors.length] }}
                  ></span>
                  {category.name}
                </span>
                <span className="text-gray-700 font-medium">
                  €{category.value.toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pie Chart */}
        <div className="col-span-2 bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
          <ResponsiveContainer width="90%" height={300}>
            <PieChart>
              <Pie
                data={expenseCategories}
                dataKey="value"
                nameKey="name"
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
                key={expense.id}
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
                <td
                  className={`px-4 py-2 text-sm font-semibold ${
                    expense.status === "Paid"
                      ? "text-green-500"
                      : "text-yellow-500"
                  }`}
                >
                  {expense.status}
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
