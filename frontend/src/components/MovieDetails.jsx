import '../App.css'

import React from "react";
import { useContext } from "react";
import logo from '../logo.svg';

import { applicationContext } from "../hooks/applicationContext";

const MovieDetails = () => {

  const { state, dispatch } = useContext(applicationContext);
  const highestMovie = state.carouselMovies.highest_rated_movie

  return(
    <div className='movie-display'>
      <h4 className='movie-award'>Top Rated Movie</h4>
      <img src={highestMovie.poster_url} alt={highestMovie.title} className='movie-poster'/>
      <div className='movie-description'>
        <div>
          <h2 className='movie-title'>{highestMovie.title}</h2>
          {/* <p className='movie-overview'>{highestMovie.overview}</p> */}
        </div>
        <div>
          <h2>Average Friend Rating:</h2>
          <div>
            {highestMovie.average_rating}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
