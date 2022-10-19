//list all article list here
//auto login
import React from "react";
import ArticleCard from "../components/ArticleCard";

const title = `Thanks for your kind words’: GigaChad finally responds to the memes`;
const image = "article0";

const ArticleList = () => {
  return (
    <div className="d-flex flex-wrap flex-column align-items-center justify-content-center">
      <ArticleCard title={title} image={image} />
      <ArticleCard title={title} image={image} />
      <ArticleCard title={title} image={image} />
    </div>
  );
};

export default ArticleList;
