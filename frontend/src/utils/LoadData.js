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
