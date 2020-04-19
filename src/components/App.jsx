import React from "react";
import Login from "./Login";

var isLogedIn = false;

function App() {
  return (
    <div className="container">{isLogedIn ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default App;
