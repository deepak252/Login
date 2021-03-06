import React from "react";
import Login from "./Login";

var isLoggedIn = false;

// function renderConditionally() {
//   if (isLoggedIn) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

function App() {
  return (
    <div className="container">
      {/* {renderConditionally()} */}
      {isLoggedIn ? <h1>hello</h1> : <Login />}
    </div>
  );
}

export default App;
