import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import articleReducer from "./article";

export default configureStore({
  reducer: {
    user: userReducer,
    article: articleReducer,
  },
});
