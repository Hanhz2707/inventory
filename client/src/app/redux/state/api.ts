import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Dashboard {
  popularProdcuts: Product[];
  salesSummary: SaleSummary[];
  purchaseSummary: PurchaseSummary[];
  expenseSummary: ExpenseSummary[];
  expenseByCategorySummary: ExpenseByCategorySummary[];
}

export interface Product {
  productId: number;
  name: string;
  price: number;
  rating: number;
  stockQuantity: number;
}

export interface SaleSummary {
  saleSummaryId: number;
  totalValue: number;
  changePercentage: number;
  date: string;
}

export interface PurchaseSummary {
  purchaseSummaryId: number;
  totalPurchased: number;
  changePercentage: number;
  date: string;
}

export interface ExpenseSummary {
  expenseSummaryId: number;
  totalExpenses: number;
  date: string;
}

export interface ExpenseByCategorySummary {
  expenseByCategorySummaryId: number;
  category: string;
  amount: string;
  date: string;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["Dashboard"],
  endpoints: (build) => ({
    getDashboard: build.query<Dashboard, void>({
      query: () => "/dashboard",
      providesTags: ["Dashboard"],
    }),
  }),
});

export const { useGetDashboardQuery } = api;
