import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  if (!data) {
    return <h1 className="loading">Loading ...</h1>;
  }
  return (
    <div className="container">
      <div className="users"></div>
      <div className="btns"></div>
    </div>
  );
}

export default App;
