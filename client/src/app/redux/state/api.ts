import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/**
 * Type for the Dashboard
 */
export interface Dashboard {
  popularProducts: Product[];
  saleSummary: SaleSummary[];
  purchaseSummary: PurchaseSummary[];
  expenseSummary: ExpenseSummary[];
  expenseByCategorySummary: ExpenseByCategorySummary[];
  user: Users[];
}

/**
 * Type for the Product
 */
export interface Product {
  productId: number;
  name: string;
  price: number;
  rating: number;
  stockQuantity: number;
}

/**
 * Type for the newProduct
 */
export interface newProduct {
  name: string;
  price: number;
  rating: number;
  stockQuantity: number;
}

/**
 * Type for the SaleSummary
 */
export interface SaleSummary {
  saleSummaryId: number;
  totalValue: number;
  changePercentage: number;
  date: string;
}

/**
 * Type for the PurchaseSummary
 */
export interface PurchaseSummary {
  purchaseSummaryId: number;
  totalPurchased: number;
  changePercentage: number;
  date: string;
}

/**
 * Type for the ExpenseSummary
 */
export interface ExpenseSummary {
  expenseSummaryId: number;
  totalExpenses: number;
  date: string;
}

/**
 * Type for the ExpenseByCategorySummary
 */
export interface ExpenseByCategorySummary {
  expenseByCategorySummaryId: number;
  category: string;
  amount: string;
  date: string;
}

/**
 * Type for the Users
 */
export interface Users {
  userId: number;
  name: string;
  email: string;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["Dashboard", "Product", "Users", "Expenses"],
  endpoints: (build) => ({
    // API fetching dashboard data with RTK Query
    getDashboard: build.query<Dashboard, void>({
      query: () => "/dashboard",
      providesTags: ["Dashboard"],
    }),
    getProducts: build.query<Product[], string | void>({
      query: (search) => ({
        url: "/products",
        params: search ? { search } : {},
      }),
      providesTags: ["Product"],
    }),
    createProduct: build.mutation<Product, newProduct>({
      query: (newProduct) => ({
        url: "/products",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Product"],
    }),
    getUsers: build.query<Users[], void>({
      query: () => "/users",
      providesTags: ["Users"],
    }),
    getExpenseByCategory: build.query<ExpenseByCategorySummary[], void>({
      query: () => "/expenses",
      providesTags: ["Expenses"],
    }),
  }),
});

export const {
  useGetDashboardQuery,
  useGetProductsQuery,
  useCreateProductMutation,
  useGetUsersQuery,
  useGetExpenseByCategoryQuery,
} = api;
