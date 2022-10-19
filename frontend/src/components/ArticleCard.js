//card
//some img
//title
//readmore
import React from "react";
import { useNavigate } from "react-router-dom";

const ArticleCard = ({ id, title, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/full-article/${id}`);
    console.log(id);
  };

  return (
    <div
      className="d-flex flex-wrap  align-items-center justify-content-center mb-3 pt-4 pb-4 border border-secondary rounded"
      style={{ "--bs-border-opacity": 0.25 }}
    >
      <div className="row text-center g-1 w-100" style={{ maxWidth: "800px" }}>
        <div className="col-md-4 ">
          <img
            src={require(`../images/${image}.jpg`)}
            alt={title}
            style={{ height: "150px", width: "150px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-6 ">
          <div className="pt-2 pb-2">
            <p className="fs-5">{title}</p>
          </div>
          <div className="pt-2 pb-2">
            <button
              onClick={() => handleClick()}
              className="btn btn-outline-primary btn-lg"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
