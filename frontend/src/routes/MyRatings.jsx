import React from "react";
import { useContext } from "react";
import MovieRate from "../components/MovieRate";
import { applicationContext } from "../hooks/applicationContext";


const MyRatings = () => {

  const { state, dispatch } = useContext(applicationContext);
  console.log("MyRatings", state)

  return(
    <React.Fragment>
      <div>
        <h1>Unrated</h1>
        <ul>
          {state.unratedMoviesList.map((movie) => {
            return(
              <li key={movie.id} onClick={() => dispatch({type: "SET_SELECTED_MOVIE_RATE", payload: movie})}>
                <img src={movie.poster_url} />
              </li>
            )
          })}
        </ul>
      </div>

      {state.selectedMovieRate.title && <MovieRate />}

    </React.Fragment>
  );
}

export default MyRatings;