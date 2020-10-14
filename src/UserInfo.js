import React from "react";
import { useContext } from "react";
import UserContext from "./UserContext";

function UserInfo() {
  const user = useContext(UserContext);
  return <div className="user-info">Current user: {user && user.name}</div>;
}

export default UserInfo;
