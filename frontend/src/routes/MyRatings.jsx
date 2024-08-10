import React from "react";
import { useContext } from "react";
import MovieRate from "../components/MovieRate";
import { applicationContext } from "../hooks/applicationContext";

import '../styles/MyRatings.css'


const MyRatings = () => {

  const { state, dispatch } = useContext(applicationContext);
  console.log("MyRatings", state)

  return(
    <React.Fragment>
      <div className="unrated-container">
        <h1>Unrated</h1>
        <ul className="unrated-list">
          {state.unratedMoviesList.length > 0 &&
            state.unratedMoviesList.map((movie) => {
              return(
                <li key={movie.id} onClick={() => dispatch({type: "SET_SELECTED_MOVIE_RATE", payload: movie})} className="unrated-item">
                  <img src={movie.poster_url} className="unrated-poster"/>
                </li>
              )
            })
          }
        </ul>
      </div>

      {/* {state.selectedMovieRate.title && <MovieRate />} */}

    </React.Fragment>
  );
}

export default MyRatings;