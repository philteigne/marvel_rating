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
      <img src={highestMovie.poster_url} alt={highestMovie.title} className='movie-poster'/>
      <div className='movie-description'>
        <div>
          <h2 className='movie-award'>Top Rated Movie</h2>
          <h3>{highestMovie.title}</h3>
          <p className='movie-overview'>{highestMovie.overview}</p>
        </div>
        <div>
          <h3>Average Friend Rating:</h3>
          <div>
            {highestMovie.average_rating}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
