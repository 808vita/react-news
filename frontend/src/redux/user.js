import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuth: false,
    isVerified: false,
    userInfo: {},
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
      state.userInfo = {};
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { authenticatedUser, verifiedUser, resetUserAuths, setUserInfo } =
  userSlice.actions;

export default userSlice.reducer;
