import React from "react";
import UserInfo from "./UserInfo";

function Header({ user }) {
  return (
    <div className="header">
      <div className="title">
        <h1>ToDo App</h1>
      </div>
      <UserInfo user={user} />
    </div>
  );
}

export default Header;
