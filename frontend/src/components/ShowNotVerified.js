import React from "react";
import { useSelector } from "react-redux";

const ShowNotVerified = () => {
  const { isVerified, isAuth } = useSelector((state) => state.user);
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center mb-3 ">
      {isAuth && !isVerified && (
        <div
          style={{ maxWidht: "600px", "--bs-border-opacity": 0.5 }}
          className="text-muted p-4 border border-secondary rounded"
        >
          Account Not Yet Verified!
        </div>
      )}
    </div>
  );
};

export default ShowNotVerified;
