import React from "react";
import { useContext } from "react";
import logo from '../logo.svg';

import { applicationContext } from "../hooks/applicationContext";

const MovieDetails = () => {

  const { state, dispatch } = useContext(applicationContext);
  console.log("Movie details", state)

  return(
    <div>
      <img src={state.movieDetails.posterLink} alt={state.movieDetails.title} />
      <h2>{state.movieDetails.title}</h2>
      <p>{state.movieDetails.overview}</p>
    </div>
  );
}

export default MovieDetails;
