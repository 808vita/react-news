export const getAllArticleList = async (dispatch, setArticleList) => {
  try {
    const response = await fetch("/api/article", {
      method: "GET",
    });
    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    }
    if (response.ok) {
      //   console.log("oof", json);
      dispatch(setArticleList(json));
      return json;
    }
  } catch (error) {
    console.log("error", error);
  }
};

export const getDetailedArticle = async (id, dispatch, setDetailedArticle) => {
  console.log(id, dispatch, setDetailedArticle);
  try {
    const response = await fetch(`/api/article/get/${id}`, {
      method: "GET",
    });
    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    }
    if (response.ok) {
      console.log("oof", json);
      dispatch(setDetailedArticle(json));
      return json;
    }
  } catch (error) {
    console.log("error", error);
  }
};

export const getAuthorInfo = async (id, dispatch, setAuthorInfo) => {
  console.log(id, dispatch, setAuthorInfo);
  try {
    const response = await fetch(`/api/article/author/${id}`, {
      method: "GET",
    });
    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    }
    if (response.ok) {
      console.log("oof", json);
      dispatch(setAuthorInfo(json));
      return json;
    }
  } catch (error) {
    console.log("error", error);
  }
};
