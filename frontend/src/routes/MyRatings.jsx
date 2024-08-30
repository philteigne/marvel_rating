import React from "react";
import { useContext } from "react";
import RatingModal from "../components/RatingModal";
import { applicationContext } from "../hooks/applicationContext";

const MyRatings = () => {

  const { state, dispatch } = useContext(applicationContext);

  return(
    <React.Fragment>
      <div className="unrated-container">
        <h1>My Ratings</h1>
        <ul className='category-list'>
          {state.myRatingsCategoriesList.length > 0 &&
            state.myRatingsCategoriesList.map((category, index) => {
              return(
                <li key={index} onClick={() => dispatch({ type: "SET_MYRATINGS_SELECTED_CATEGORY", payload: category})} className='category-item'>
                  <h3>{category}</h3>
                </li>
              )
            })
          }
        </ul>
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