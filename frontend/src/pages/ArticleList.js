//list all article list here
//auto login
import React, { useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import useArticle from "../hooks/useArticle";
import { useSelector } from "react-redux";
// const title = `Thanks for your kind words’: GigaChad finally responds to the memes`;
// const image = "article0";

const ArticleList = () => {
  const { setAllArticleData } = useArticle();
  const { artilceList, selectedArticle, selectedAuthorInfo } = useSelector(
    (state) => state.article
  );
  // -----

  useEffect(() => {
    console.log(artilceList, selectedArticle, selectedAuthorInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artilceList]);
  // -----
  return (
    <div className="d-flex flex-wrap flex-column align-items-center justify-content-center">
      <div className="row g-8 text-center">
        <div className="col-sm-12 mb-3">
          {artilceList.length > 0 &&
            artilceList?.map((articleData) => (
              <ArticleCard
                key={articleData.id}
                id={articleData.id}
                title={articleData.title}
                image={articleData?.img}
              />
            ))}
        </div>
      </div>

      {/* <ArticleCard title={title} image={image} />
      <ArticleCard title={title} image={image} />
      <ArticleCard title={title} image={image} /> */}
    </div>
  );
};

export default ArticleList;
