import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import globalReducer from "../../redux/state";

const createNoopStorage = () => {
    return {
      getItem(_key: any) {
        return Promise.resolve(null);
      },
      setItem(_key: any, value: any) {
        return Promise.resolve(value);
      },
      removeItem(_key: any) {
        return Promise.resolve();
      },
    };
  };
  
  const storage =
    typeof window === "undefined"
      ? createNoopStorage()
      : createWebStorage("local");
  
  const persistConfig = { 
    key: "root",
    storage,
    whitelist: ["global"],
  };

  const rootReducer = combineReducers({
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer);

