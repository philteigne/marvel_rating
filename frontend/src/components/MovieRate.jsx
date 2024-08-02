import React from "react";
import { useContext, useState } from "react";

import { applicationContext } from "../hooks/applicationContext";

import RatingForm from "./RatingForm";

const MovieRate = () => {

  const { state, dispatch } = useContext(applicationContext);

  return(
    <React.Fragment>
      <div>
        <img src={state.selectedMovieRate.poster_url} alt={state.selectedMovieRate.title} />
        <h2>{state.selectedMovieRate.title}</h2>
        <p>{state.selectedMovieRate.overview}</p>
      </div>
      <div>
        <RatingForm />
      </div>
    </React.Fragment>
  );
}

export default MovieRate;
