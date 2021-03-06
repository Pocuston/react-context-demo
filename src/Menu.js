import React from "react";

function Menu({ user }) {
  return (
    <div className="menu">
      <ul>
        <li>
          <a href="#">Today tasks</a>
        </li>
        <li>
          <a href="#">Shopping list</a>
        </li>
        <li>
          <a href="#">Books to read</a>
        </li>
        <li>
          <a href="#">Work task list</a>
        </li>
        {user && user.isPrivileged && (
          <li>
            <a href="#">Shared task list</a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Menu;
