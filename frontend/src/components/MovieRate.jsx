import React from "react";
import { useContext, useState } from "react";

import { applicationContext } from "../hooks/applicationContext";

import RatingForm from "./RatingForm";

const MovieRate = () => {

  const { state, dispatch } = useContext(applicationContext);

  return(
    <React.Fragment>
      <div className="unrated-focus">
        <img src={state.selectedMovieRate.poster_url} alt={state.selectedMovieRate.title} className='unrated-poster-focus'/>
        <div className="unrated-details">
          <h2 className='unrated-title'>{state.selectedMovieRate.title}</h2>
          <p className='unrated-overview'>{state.selectedMovieRate.overview}</p>
          <RatingForm />
        </div>
      </div>
    </React.Fragment>
  );
}

export default MovieRate;
