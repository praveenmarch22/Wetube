import { createSlice } from "@reduxjs/toolkit";
import { OFFSITE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
  name: "Live chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessages: (state, action) => {
      state.messages.splice(OFFSITE_CHAT_COUNT, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessages } = chatSlice.actions;
export default chatSlice.reducer;
