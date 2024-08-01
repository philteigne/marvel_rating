import React from "react";
import { useContext } from "react";
import logo from '../logo.svg';

import { applicationContext } from "../hooks/applicationContext";

const MovieDetails = () => {

  const { state, dispatch } = useContext(applicationContext);
  const highestMovie = state.carouselMovies.highest_rated_movie

  return(
    <div>
      <img src={highestMovie.poster_url} alt={highestMovie.title} />
      <h2>{highestMovie.title}</h2>
      <p>{highestMovie.overview}</p>
    </div>
  );
}

export default MovieDetails;
