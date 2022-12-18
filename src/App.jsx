import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import User from "./user";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [users, setUsers] = useState(null);
  const [btnNum, setBtnNum] = useState([]);
  useEffect(() => {
    axios(" https://api.github.com/users").then((res) => setData(res.data));
  }, []);
  useEffect(() => {
    const start = count * 6;
    const end = start + 6;
    console.log(start, end);
    setUsers(data.slice(start, end));
  }, [count]);
  useEffect(() => {
    setUsers(data.slice(0, 6));
    const newBtnArr = [];
    for (let i = 0; i < data.length / 6; i++) {
      newBtnArr.push(`${i}`);
    }
    setBtnNum(newBtnArr);
  }, [data]);

  const clickHandler = (event) => {
    setCount(+event.target.innerText - 1);
  };

  if (!data.length) {
    return <h1 className="loading">Loading ...</h1>;
  }
  return (
    <div className="container">
      <div className="users">
        {users.map((user) => {
          return <User {...user} />;
        })}
      </div>
      <div className="btns">
        <button
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        >
          Previuos
        </button>
        {btnNum.map((element, index) => {
          if (index === count) {
            return (
              <button
                onClick={() => clickHandler(event)}
                style={{ background: "black" }}
              >
                {index + 1}
              </button>
            );
          } else {
            return (
              <button onClick={() => clickHandler(event)}>{index + 1}</button>
            );
          }
        })}
        <button
          onClick={() => {
            if (count < data.length / 6 - 1) {
              setCount(count + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
