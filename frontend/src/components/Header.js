import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  authenticatedUser,
  verifiedUser,
  resetUserAuths,
  setUserInfo,
} from "../redux/user";
import { Link } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
import { setLanguage } from "../redux/article";
const Header = () => {
  const { isAuth } = useSelector((state) => state.user);
  const { articleLanguage } = useSelector((state) => state.article);
  const dispatch = useDispatch();
  //testing user slice , dispatch and selector
  //modify next round

  const { loginWithPopup, logout, user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (!user) {
      return;
    }

    if (user && isAuthenticated) {
      // set isAuth to true
      dispatch(authenticatedUser());

      console.log(user);
      console.log(isAuthenticated);
      // set valid user info into redux
      dispatch(setUserInfo(user));

      if (user.email_verified) {
        // set isVerified to if the user has verified email
        dispatch(verifiedUser());
      }
    }
  }, [user, dispatch, isAuthenticated]);
  const handleLogout = () => {
    logout();
    dispatch(resetUserAuths());
  };

  const handleLangClick = () => {
    if (articleLanguage === "en") {
      dispatch(setLanguage("fr"));
    } else if (articleLanguage === "fr") {
      dispatch(setLanguage("en"));
    }
  };

  useEffect(() => {
    console.log(articleLanguage);
  }, [articleLanguage]);

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img
            src="https://avatars.githubusercontent.com/u/97225946?v=4"
            height={50}
            className="rounded-circle"
            alt="memecat"
          />
          <h4>
            <span className="logo-e">E</span>-News
          </h4>
        </Link>

        <div className="col-md-3 text-end ">
          <div className="d-flex flex-wrap align-items-center justify-content-center">
            {!isAuth ? (
              <span
                onClick={loginWithPopup}
                type="button"
                className="btn btn-primary m-2"
              >
                Login
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-box-arrow-in-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
              </span>
            ) : (
              <div className="flex-shrink-0 dropdown m-3">
                <span
                  className="d-block link-dark text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={user?.picture}
                    alt="mdo"
                    width="40"
                    height="40"
                    className="rounded-circle"
                  />
                </span>
                <ul className="dropdown-menu text-small shadow">
                  <li>
                    <Link to="/profile" className="dropdown-item">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <span
                      onClick={() => handleLangClick()}
                      className="dropdown-item"
                    >
                      Change To: {articleLanguage === "en" ? "FR" : "EN"}
                    </span>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <span
                      onClick={() => handleLogout()}
                      className="dropdown-item"
                    >
                      Log Out
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
