
import styled from "styled-components";
import React from "react";

const Container = styled.form`
  box-sizing: border-box;
  max-width: 410px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
styled.input`
  padding: 1rem;
  border: 1px solid #999;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`
styled.button`
  background: linear-gradient(to bottom, #6371c7, #5563c1);
  border-color: #3f4eae;
  border-radius: 3px;
  padding: 1rem;
  color: white;
  font-weight: 700;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  cursor: pointer;
`
styled.div`
  box-sizing: border-box;
  max-width: 410px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;`
function LoginForm() {

    return (
      <Container>
        <div className="card">
        <form>
          <input className="input" placeholder={"Email"} />
          <input className="input" placeholder={"Password"} />
          <button className="button">Login</button>
        </form>
        </div>
      </Container>
    )
  }
export default LoginForm