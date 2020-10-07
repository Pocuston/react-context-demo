import React from "react";

function ToDoItem({ item, user }) {
  return (
    <div className="to-do-item">
      {item.name}{" "}
      {user.id === item.author && (
        <>
          <button>Delete</button> <button>Edit</button>
        </>
      )}
    </div>
  );
}

export default ToDoItem;
