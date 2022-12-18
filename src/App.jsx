import { useState } from "react";
import "./App.css";
import User from "./user";

function App() {
  const [data, setData] = useState(true);

  if (!data) {
    return <h1 className="loading">Loading ...</h1>;
  }
  return (
    <div className="container">
      <div className="users">
        <User />
        <User />
        <User />
      </div>
      <div className="btns">
        <button>Previuos</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default App;
