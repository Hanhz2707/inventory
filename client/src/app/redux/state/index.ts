import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateType {
    isSideBarCollapsed: boolean;
    isDarkMode: boolean;
}

// Setting the initial state of the global slice
const initialState: InitialStateType = {
    isSideBarCollapsed: false,
    isDarkMode: false,
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {

        // Creating 2 functions to toggle the sidebar and dark mode
        toggleSideBar: (state, action: PayloadAction<boolean>) => {
            state.isSideBarCollapsed = action.payload;
        },
        
        toggleDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        },
    },
});

export const { toggleSideBar, toggleDarkMode } = globalSlice.actions;

export default globalSlice.reducer;