import React, { useContext } from "react";
import UserContext from "./UserContext";

function ToDoItem({ item }) {
  const user = useContext(UserContext);
  return (
    <div className="to-do-item">
      <div className="to-do-item-title">{item.name}</div>
      {user.id === item.author && (
        <div className="to-do-item-controls">
          <button>Delete</button> <button>Edit</button>
        </div>
      )}
    </div>
  );
}

export default ToDoItem;
