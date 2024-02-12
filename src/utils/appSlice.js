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
  },
});

export const { toggleSideBarView } = appSlice.actions;

export default appSlice.reducer;
