import React from 'react';

function UserInfo({user}) {
  return (
    <div className="userInfo">
        Current user: {user}
    </div>
  );
}

export default UserInfo;
