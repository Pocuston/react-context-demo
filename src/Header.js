import React from 'react';
import UserInfo from "./UserInfo";

function Header({ user }) {
  return (
    <div className="header">

      <UserInfo user={user} />
    </div>
  );
}

export default Header;
