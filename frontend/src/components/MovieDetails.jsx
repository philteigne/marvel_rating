import React from "react";
import logo from '../logo.svg';

const MovieDetails = () => {
  return(
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Movie Title</h2>
      <p>Movie overview text but more like a paragraph it'll be pretty long</p>
    </div>
  );
}

export default MovieDetails;
