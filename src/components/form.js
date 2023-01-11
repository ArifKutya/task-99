
import  "./styles.css";
import React from "react";
function LoginForm() {

    return (
      <div className="card">
        <form className="form">
          <input className="input" placeholder={"Email"} />
          <input className="input" placeholder={"Password"} />
          <button className="button">Login</button>
        </form>
      </div>
    )
  }
export default LoginForm