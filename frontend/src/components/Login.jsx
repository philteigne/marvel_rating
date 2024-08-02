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
      console.log(response.headers)
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      // You can now access cookies via document.cookie if they are set by the server
      console.log('Cookies:', document.cookie);
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