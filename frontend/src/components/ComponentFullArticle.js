import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setDetailedArticle } from "../redux/article";
import { getDetailedArticle, getTranslation } from "../utils/LoadData";
import AuthorCard from "./AuthorCard";

const ComponentFullArticle = ({ id }) => {
  const dispatch = useDispatch();

  const { selectedArticle, articleLanguage } = useSelector(
    (state) => state.article
  );

  const [titleInFrench, setTitleInFrench] = useState("");
  const [contentInFrench, setContentInFrench] = useState("");
  useEffect(() => {
    if (!id) {
      return;
    }

    getDetailedArticle(id, dispatch, setDetailedArticle);
    console.log(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    console.log(selectedArticle);
  }, [selectedArticle]);

  useEffect(() => {
    if (
      articleLanguage === "fr" &&
      selectedArticle?.title &&
      selectedArticle?.content
    ) {
      getTranslation(selectedArticle?.title, setTitleInFrench);
      getTranslation(
        (selectedArticle?.content).substring(0, 995),
        setContentInFrench
      );
    }
  }, [articleLanguage]);

  return (
    <div className="d-flex flex-wrap flex-column align-items-center justify-content-center">
      {selectedArticle?.img && (
        <div
          className="d-flex flex-wrap flex-column align-items-center justify-content-center p-4 border border-secondary rounded"
          style={{ "--bs-border-opacity": 0.25 }}
        >
          <div className="mt-5 p-4 border border-secondary rounded">
            <img
              src={require(`../images/${selectedArticle?.img}.jpg`)}
              alt={selectedArticle?.title}
              style={{
                height: "60vh",
                width: "60vh",
                objectFit: "cover",
              }}
            />
          </div>

          <div>
            <div className="pt-2 pb-2">
              {titleInFrench && articleLanguage === "fr" ? (
                <p className="fs-5">{titleInFrench}</p>
              ) : (
                <p className="fs-4">{selectedArticle?.title}</p>
              )}
              <hr />
            </div>
          </div>

          <div>
            <div>
              <div className="pt-2 pb-2">
                {contentInFrench && articleLanguage === "fr" ? (
                  <p className="fs-5">{contentInFrench}</p>
                ) : (
                  <p className="fs-6 lh-lg text-center">
                    {selectedArticle?.content}
                  </p>
                )}
              </div>
              <hr />
            </div>
          </div>
          <div>
            <div className="pt-2 pb-2">
              <AuthorCard authorId={selectedArticle?.author} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComponentFullArticle;
