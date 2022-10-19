import React from "react";

const ComponentFullArticle = ({ title, image, author, content }) => {
  return (
    <div className="d-flex flex-wrap flex-column align-items-center justify-content-center">
      <div
        className="d-flex flex-wrap flex-column align-items-center justify-content-center p-4 border border-secondary rounded"
        style={{ "--bs-border-opacity": 0.25 }}
      >
        <div className="mt-5 p-4 border border-secondary rounded">
          <img
            src={require(`../images/${image}.jpg`)}
            alt={title}
            style={{
              minHeight: "300px",
              minWidth: "300px",
              maxHeight: "800px",
              maxWidth: "800px",
              objectFit: "cover",
            }}
          />
        </div>

        <div>
          <div className="pt-2 pb-2">
            <p className="fs-4">{title}</p>
            <hr />
          </div>
        </div>

        <div>
          <div>
            <div className="pt-2 pb-2">
              <p className="fs-5 lh-lg text-center">{content}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="pt-2 pb-2">
            <p className="fs-4">Author: {author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentFullArticle;
