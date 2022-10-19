//requires protection
//detailed article
import React from "react";
import { useSelector } from "react-redux";
const FullArticle = () => {
  const { isVerified, isAuth } = useSelector((state) => state.user);

  if (!isAuth) {
    return (
      <div className="d-flex flex-wrap flex-column align-items-center justify-content-center">
        please Login
      </div>
    );
  } else if (isAuth && !isVerified) {
    return (
      <div className="d-flex flex-wrap flex-column align-items-center justify-content-center">
        auth but not verified
      </div>
    );
  } else if (isAuth && isVerified) {
    return (
      <div className="d-flex flex-wrap flex-column align-items-center justify-content-center">
        valid auth with verification
      </div>
    );
  }
};

export default FullArticle;
