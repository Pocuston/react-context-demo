import React from "react";
import ToDoList from "./ToDoList";

function Content({ user }) {
  return (
    <div className="content">
      <ToDoList user={user} />
    </div>
  );
}

export default Content;
