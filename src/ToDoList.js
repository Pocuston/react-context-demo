import React from "react";
import ToDoItem from "./ToDoItem";

function getToDoItems() {
  const items = [];
  for (let i = 0; i < 24; i++) {
    items.push({
      id: i,
      name: `Item #${i + 4}`,
      author: Math.floor(Math.random() * 4),
    });
  }
  return items;
}

function ToDoList({ user }) {
  const toDoItems = getToDoItems();
  return (
    <div className="to-do-list">
      {toDoItems.map((item) => (
        <ToDoItem key={item.id} item={item} user={user} />
      ))}
    </div>
  );
}

export default ToDoList;
