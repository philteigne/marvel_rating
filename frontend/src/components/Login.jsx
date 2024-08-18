import React from "react";
import { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch(`https://ratings.svidnet.com/api/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
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
    })
    .catch(error => {
      console.error('Error:', error);
    });

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:
        <input type="email" onChange={(e) => {
          setEmail(e.target.value)
        }}></input>
      </label>
      <label>
        <input type="password" onChange={(e) => {
          setPassword(e.target.value)
        }}></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Login;