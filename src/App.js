import "./App.css";
import React from "react";
import { Menus, Main } from "./Components";
function App() {
  return (
    <div className="app">
      <Menus />
      <div className="app__main">
        <Main />
      </div>
    </div>
  );
}

export default App;
