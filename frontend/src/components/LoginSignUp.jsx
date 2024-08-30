import React from "react";
import { useState, useContext } from "react";

import { applicationContext } from "../hooks/applicationContext";

const LoginSignUp = () => {

  const { state, dispatch } = useContext(applicationContext);

  const [displayName, setDisplayName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch(`https://ratings.svidnet.com/api/${state.isUser ? "login" : "register"}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        display_name: displayName,
        email: email,
        password: password
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      sessionStorage.setItem('jwtToken', data.access_token);
      window.location.reload()
    })
    .catch(error => {
      console.error('Error:', error);
    });

  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        {!state.isUser &&
        <label className="login-label">Display Name
          <input type="text" maxLength={20} className="login-input" onChange={(e) => {
            setDisplayName(e.target.value)
          }}></input>
        </label>}

        <label className="login-label">Email
          <input type="email" className="login-input" onChange={(e) => {
            setEmail(e.target.value)
          }}></input>
        </label>
        <label className="login-label">Password
          <input type="password" className="login-input" onChange={(e) => {
            setPassword(e.target.value)
          }}></input>
        </label>
        <button type="submit">Submit</button>
      </form>
      {state.isUser &&
        <p>Don't have an account? <a onClick={() => dispatch({type: "SET_IS_USER", payload: false})}>Sign Up</a></p>
      }
      {!state.isUser &&
        <p>Have an account already? <a onClick={() => dispatch({type: "SET_IS_USER", payload: true})}>Log In</a></p>
      }
    </div>
  )
}

export default LoginSignUp;