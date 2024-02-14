import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSideBarOpen: true,
    searchQuery: "",
  },
  reducers: {
    toggleSideBarView: (state, action) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    closeSideBarView: (state, action) => {
      state.isSideBarOpen = false;
    },
    addSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { toggleSideBarView, closeSideBarView, addSearchQuery } =
  appSlice.actions;

export default appSlice.reducer;
