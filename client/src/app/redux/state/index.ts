import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * Type for the ExpenseByCategorySummary
 */
export interface InitialStateType {
  isSideBarCollapsed: boolean;
  isDarkMode: boolean;
}

const initialState: InitialStateType = {
  isSideBarCollapsed: false,
  isDarkMode: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    /**
     * Function to set the sidebar collapsed state
     */
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSideBarCollapsed = action.payload;
    },

    /**
     * Function to set the dark mode state
     */
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setIsSidebarCollapsed, setIsDarkMode } = globalSlice.actions;

export default globalSlice.reducer;
