import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAuthorInfo } from "../redux/article";
import { getAuthorInfo, getTranslation } from "../utils/LoadData";

const AuthorCard = ({ authorId }) => {
  const dispatch = useDispatch();

  const { selectedAuthorInfo, articleLanguage } = useSelector(
    (state) => state.article
  );
  const [contentInFrench, setContentInFrench] = useState("");
  useEffect(() => {
    if (!authorId) {
      return;
    }

    getAuthorInfo(authorId, dispatch, setAuthorInfo);
    console.log(authorId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    console.log(selectedAuthorInfo);
  }, [selectedAuthorInfo]);

  useEffect(() => {
    if (articleLanguage === "fr" && selectedAuthorInfo?.content) {
      getTranslation(
        (selectedAuthorInfo?.content).substring(0, 995),
        setContentInFrench
      );
    }
  }, [articleLanguage]);

  return (
    <>
      {selectedAuthorInfo?.img && (
        <div
          className="d-flex flex-column flex-wrap align-items-center justify-content-center pe-4 px-4 pt-3 border border-secondary rounded "
          style={{
            "--bs-border-opacity": 0.3,
            maxWidth: "300px",
          }}
        >
          <h3 className="text-secondary mb-3">Author Info</h3>
          <div className="mb-5">
            <div
              style={{
                "--bs-border-opacity": 0.3,
                padding: "1.5vw",
              }}
              className=" border border-secondary rounded"
            >
              <div className="d-flex flex-wrap align-items-center justify-content-center">
                <img
                  src={require(`../images/${selectedAuthorInfo?.img}.jpg`)}
                  style={{
                    objectFit: "cover",
                    height: "200px",
                    width: "200px",
                  }}
                  className=""
                  alt=".."
                />
              </div>
            </div>
            <div>
              <p className="fs-5 text-center">{selectedAuthorInfo?.name}</p>
              {contentInFrench && articleLanguage === "fr" ? (
                <p className="fs-5">{contentInFrench}</p>
              ) : (
                <p className="fs-6 text-center">
                  {selectedAuthorInfo?.content}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthorCard;
