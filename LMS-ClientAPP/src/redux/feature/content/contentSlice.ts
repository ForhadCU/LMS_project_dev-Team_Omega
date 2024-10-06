import { createSlice } from "@reduxjs/toolkit";
import { TContents } from "../../../Types/content.type";

const initialValue: TContents = {
  contents: [],
};

const contentSlice = createSlice({
  name: "contents",
  initialState: initialValue,
  reducers: {
    setContents: (state, actions) => {
      state.contents = actions.payload;
    },
    unsetContents: (state) => {
      state.contents = [];
    },
  },
});

export const { setContents, unsetContents } = contentSlice.actions;
export default contentSlice.reducer;
