import React from "react";

function UserInfo({ user }) {
  return <div className="user-info">Current user: {user && user.name}</div>;
}

export default UserInfo;
