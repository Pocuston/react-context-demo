import React from "react";
import UserContext from "./UserContext";

function UserInfo() {
  return (
    <UserContext.Consumer>
      {(user) => (
        <div className="user-info">Current user: {user && user.name}</div>
      )}
    </UserContext.Consumer>
  );
}

export default UserInfo;
