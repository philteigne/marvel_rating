import React from "react";
import { useContext } from "react";

import { applicationContext } from "../hooks/applicationContext";

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
        <form>
          <label>Fight</label>
          <input type="number" min="1" max="10" step="1" placeholder="0"></input>

          <label>Comedy</label>
          <input type="number" min="1" max="10" step="1" placeholder="0"></input>
          
          <label>Wow</label>
          <input type="number" min="1" max="10" step="1" placeholder="0"></input>

          <label>Future</label>
          <input type="number" min="1" max="10" step="1" placeholder="0"></input>

          <label>Villain</label>
          <input type="number" min="1" max="10" step="1" placeholder="0"></input>

          <label>Story</label>
          <input type="number" min="1" max="10" step="1" placeholder="0"></input>

          <h3>Total: </h3>
          <button>Submit</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default MovieRate;
