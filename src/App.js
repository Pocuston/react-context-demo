import React from "react";
import Header from "./Header";
import Content from "./Content";
import Menu from "./Menu";
import UserContext from "./UserContext";

function App() {
    const user = {
        id: 1,
        name: "John Smith",
        isPrivileged: true,
    };
    return (
        <div className="app">
            <UserContext.Provider value={user}>
                <Header />
                <Menu />
                <Content />
            </UserContext.Provider>
        </div>
    );
}

export default App;
