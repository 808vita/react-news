import React from "react";
import UserCard from "../components/UserCard";
import { useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
const UserProfile = () => {
  const { userInfo } = useSelector((state) => state.user);
  return (
    <div className="container-fluid d-flex flex-column flex-wrap align-items-center justify-content-center ">
      {!userInfo?.email ? (
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      ) : (
        <>
          <h3 className="text-secondary mb-3">Account Info</h3>
          <div className="mb-5">
            <UserCard />
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfile;
