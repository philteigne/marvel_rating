import React from "react";
import logo from '../logo.svg';

const Home = () => {
  return (
    <div>
        <h1>
          Top Movie
        </h1>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Movie Title</h2>
          <p>Movie overview text but more like a paragraph it'll be pretty long</p>
        </div>
      </div>
  );
}

export default Home;