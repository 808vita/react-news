//TestAuthsRedux
//handle buttons use auth states
//
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticatedUser, verifiedUser, resetUserAuths } from "../redux/user";

import { useAuth0 } from "@auth0/auth0-react";
const TestAuthsRedux = () => {
  const { isAuth, isVerified } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  //testing user slice , dispatch and selector
  //modify next round

  const { loginWithPopup, logout, user, isAuthenticated } = useAuth0();
  return (
    <>
      <div>
        <h1>checking auth0</h1>
        isAuthenticated: <p>{String(isAuthenticated)}</p>
        <pre style={{ textAlign: "start" }}>
          {JSON.stringify(user, null, 2)}
        </pre>
        <button onClick={loginWithPopup}>login pop</button>
        <button onClick={logout}>logout</button>
      </div>

      <div>
        <h1>TestAuthsRedux</h1>
        auth: <p>{String(isAuth)}</p>
        verified: <p>{String(isVerified)}</p>
        <button onClick={() => dispatch(authenticatedUser())}>set auth</button>
        <button onClick={() => dispatch(verifiedUser())}>set verified</button>
        <button onClick={() => dispatch(resetUserAuths())}>reset user</button>
      </div>
    </>
  );
};

export default TestAuthsRedux;
