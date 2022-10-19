import React, { useEffect } from "react";
// import { useUser } from "@auth0/nextjs-auth0";
import { useSelector } from "react-redux";
const UserCard = () => {
  //   const { user, error, isLoading } = useUser();

  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <div
      style={{
        maxWidth: "600px",
        "--bs-border-opacity": 0.3,
        padding: "1.5vw",
      }}
      className=" border border-secondary rounded"
    >
      {userInfo && (
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <img
            src={userInfo?.picture}
            style={{
              objectFit: "cover",
              minHeight: "100px",
              minWidth: "100px",
            }}
            className="pe-2"
            alt=".."
          />
          <div>
            <h6>{userInfo?.nickname}</h6>
            <h6>{userInfo?.email}</h6>
            {userInfo?.email_verified ? (
              <h6 className="text-success">Verified Account</h6>
            ) : (
              <h6 className="text-danger">Not Verified</h6>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
