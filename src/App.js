import React from "react";
import Header from "./Header";
import Content from "./Content";
import Menu from "./Menu";

function App() {
  const currentUser = {
    id: 1,
    name: "John Smith",
    isPrivileged: true,
  };
  return (
    <div className="app">
      <Header user={currentUser} />
      <Menu user={currentUser} />
      <Content user={currentUser} />
    </div>
  );
}

export default App;
