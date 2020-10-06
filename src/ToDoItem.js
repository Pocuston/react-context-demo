import React from "react";

function ToDoItem({ item, user }) {
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
