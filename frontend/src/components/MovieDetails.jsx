import '../App.css'
import '../styles/Home.css'

import React from "react";
import { useContext } from "react";
import logo from '../logo.svg';

import { applicationContext } from "../hooks/applicationContext";

const MovieDetails = () => {

  const { state, dispatch } = useContext(applicationContext);
  const highestMovie = state.carouselMovies.highest_rated_movie

  return(
    <div className='movie-display'>
      <img src={highestMovie.poster_url} alt={highestMovie.title} />
      <div className='movie-description'>
        <h2 className='movie-award'>Top Rated Movie</h2>
        <h3 className='movie-title'>{highestMovie.title}</h3>
        <p className='movie-overview'>{highestMovie.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
