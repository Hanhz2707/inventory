"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { AppStore } from "../types/types";
import { makeStore } from "../store/store";
import { setupListeners } from "@reduxjs/toolkit/query";

/*
 * This component will create the store and share it
 * using React-Redux Provider component.
 */
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();

    // Refetching data, keeping data in sync with server
    setupListeners(storeRef.current.dispatch);
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
