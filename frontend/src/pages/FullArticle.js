//requires protection
//detailed article

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ComponentFullArticle from "../components/ComponentFullArticle";

const FullArticle = () => {
  const { isVerified, isAuth } = useSelector((state) => state.user);
  const params = useParams();
  console.log(params);
  if (!isAuth) {
    return (
      <div className="d-flex flex-wrap flex-column align-items-center justify-content-center">
        <p className="fs-5">please Login!</p>
      </div>
    );
  } else if (isAuth && !isVerified) {
    return (
      <div className="d-flex flex-wrap flex-column align-items-center justify-content-center">
        <p className="fs-5">Please verify your email to read the article!</p>
      </div>
    );
  } else if (isAuth && isVerified) {
    return (
      <div className="d-flex flex-wrap flex-column align-items-center justify-content-center">
        <div
          className="d-flex flex-wrap flex-column align-items-center justify-content-center"
          style={{ maxWidth: "1400px" }}
        >
          <ComponentFullArticle id={params?.id} />
        </div>
      </div>
    );
  }
};

export default FullArticle;
