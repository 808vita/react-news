import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
  name: "article",
  initialState: {
    artilceList: [],
    selectedArticle: {},
    selectedAuthorInfo: {},
    articleLanguage: "en",
  },
  reducers: {
    resetSelected: (state) => {
      state.selectedArticle = {};
      state.selectedAuthorInfo = {};
    },
    setArticleList: (state, action) => {
      state.artilceList = action.payload;
    },
    setDetailedArticle: (state, action) => {
      state.selectedArticle = action.payload;
    },
    setAuthorInfo: (state, action) => {
      state.selectedAuthorInfo = action.payload;
    },
    setLanguage: (state, action) => {
      state.articleLanguage = action.payload;
    },
  },
});

export const {
  resetSelected,
  setArticleList,
  setDetailedArticle,
  setAuthorInfo,
  setLanguage,
} = articleSlice.actions;

export default articleSlice.reducer;
