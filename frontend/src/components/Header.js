//header
//handle buttons use auth states
//
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticatedUser, verifiedUser, resetUserAuths } from "../redux/user";

const Header = () => {
  const { isAuth, isVerified } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  //testing user slice , dispatch and selector
  //modify next round
  return (
    <div>
      <h1>Header</h1>
      auth: <p>{String(isAuth)}</p>
      verified: <p>{String(isVerified)}</p>
      <button onClick={() => dispatch(authenticatedUser())}>set auth</button>
      <button onClick={() => dispatch(verifiedUser())}>set verified</button>
      <button onClick={() => dispatch(resetUserAuths())}>reset user</button>
    </div>
  );
};

export default Header;
