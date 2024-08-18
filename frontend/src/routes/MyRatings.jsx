import React from "react";
import { useContext } from "react";
import RatingModal from "../components/RatingModal";
import { applicationContext } from "../hooks/applicationContext";

import '../styles/MyRatings.css'


const MyRatings = () => {

  const { state, dispatch } = useContext(applicationContext);

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

      {state.selectedMovieRate.title && <RatingModal />}

    </React.Fragment>
  );
}

export default MyRatings;