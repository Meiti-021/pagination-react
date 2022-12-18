import React from "react";
import "./user.css";
const User = ({ login, avatar_url }) => {
  return (
    <div className="user">
      <img src={avatar_url} alt={login} className="user-pic" />
      <p className="username">{login}</p>
      <button className="follow">follow</button>
    </div>
  );
};

export default User;
