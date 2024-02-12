import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSideBarOpen: true,
  },
  reducers: {
    toggleSideBarView: (state, action) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    closeSideBarView: (state, action) => {
      state.isSideBarOpen = false;
    },
  },
});

export const { toggleSideBarView, closeSideBarView } = appSlice.actions;

export default appSlice.reducer;
