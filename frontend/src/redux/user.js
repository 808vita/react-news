import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuth: false,
    isVerified: false,
  },
  reducers: {
    authenticatedUser: (state) => {
      state.isAuth = true;
    },
    verifiedUser: (state) => {
      state.isVerified = true;
    },
    resetUserAuths: (state) => {
      state.isAuth = false;
      state.isVerified = false;
    },
  },
});

export const { authenticatedUser, verifiedUser, resetUserAuths } =
  userSlice.actions;

export default userSlice.reducer;
