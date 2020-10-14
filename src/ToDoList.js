import React from "react";
import ToDoItem from "./ToDoItem";

function getToDoItems() {
  const items = [];
  for (let i = 0; i < 64; i++) {
    items.push({
      id: i,
      name: `Item #${i}`,
      author: Math.floor(Math.random() * 4),
    });
  }
  return items;
}

function ToDoList() {
  const toDoItems = getToDoItems();
  return (
    <div className="to-do-list">
      {toDoItems.map((item) => (
        <ToDoItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ToDoList;
