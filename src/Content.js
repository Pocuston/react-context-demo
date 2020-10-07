import React from "react";
import ToDoList from "./ToDoList";

function Content({ user }) {
  return (
    <div className="content">
      Content
      <ToDoList user={user} />
    </div>
  );
}

export default Content;
