import React from "react";
import Header from "./Header";
import Content from "./Content";
import Menu from "./Menu";

function App() {
  const user = {
    id: 1,
    name: "John Smith",
    isPrivileged: true,
  };
  return (
    <div className="app">
      <Header user={user} />
      <Menu user={user} />
      <Content user={user} />
    </div>
  );
}

export default App;
