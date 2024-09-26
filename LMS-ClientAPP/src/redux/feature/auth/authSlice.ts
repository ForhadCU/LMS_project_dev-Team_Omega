import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type TAuthUser = {
  user: null | Object;
  token: null | string;
};

const InitialState: TAuthUser = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: InitialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      (state.user = user), (state.token = token);
    },
    logOut: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;
