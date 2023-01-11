import styles from "./styles.css";
import React from "react";
function LoginForm() {
  return (
    <div className={styles.card}>
      <form className={styles.form}>
        <input className={styles.input} placeholder={"Email"}/>
        <input className={styles.input} placeholder={"Password"}/>
        <button className={styles.button}>Login</button>

    </form>
    </div>
  )
}
export default LoginForm