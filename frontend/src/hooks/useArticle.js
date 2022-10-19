import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { setArticleList } from "../redux/article";
import { getAllArticleList } from "../utils/LoadData";
const useArticle = () => {
  const dispatch = useDispatch();

  /**
   * set all article list into redux article slice
   * article list
   */
  async function setAllArticleData() {
    await getAllArticleList(dispatch, setArticleList);
  }

  useEffect(() => {
    setAllArticleData();
    //set article list on load first time

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { setAllArticleData };
};

export default useArticle;
