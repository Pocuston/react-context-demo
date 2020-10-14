import React from "react";
import UserInfo from "./UserInfo";

function Header() {
  return (
    <div className="header">
      <div className="title">
        <h1>ToDo App</h1>
      </div>
      <UserInfo />
    </div>
  );
}

export default Header;
