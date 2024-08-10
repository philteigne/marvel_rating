import React from "react";
import { useContext, useState, useEffect } from "react";

import { applicationContext } from "../hooks/applicationContext";

const RatingForm = () => {

  const { state, dispatch } = useContext(applicationContext);
  const [movieRating, setMovieRating] = useState({})
  const [ratingTotal, setRatingTotal] = useState(0)

  const findRatingAverage = (movieObj) => {
    const keys = Object.keys(movieObj);
    let sum = 0;

    for (let key of keys) {
      console.log("found rating value", movieObj[key].rating)
      sum += parseInt(movieObj[key].rating)
    }

    console.log("sum", sum)
    return Math.round((sum / keys.length) * 100) / 100 || 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const ratingSubmitObj = {
      userID: state.userID,
      movieID: state.selectedMovieRate.id,
      ratings: movieRating
    }

    dispatch({ type: "SET_RATE_MOVIE", payload: ratingSubmitObj })
  }

  useEffect(() => {
    setRatingTotal(findRatingAverage(movieRating));
  }, [movieRating]);

  return(
    <form onSubmit={handleSubmit}>
      <div className="rating-form">
        {state.categoriesList.map((category) => {
          return (
            <div className="rating-input-container">
              <label key={category.id} className="rating-label">{category.name}</label>
              <input type="number" min="1" max="10" step="1" placeholder="0" onChange={(e) => { 
                setMovieRating({
                  ...movieRating,
                  [category.id]: {
                    id: category.id,
                    rating: e.target.value
                  }
                })
              }}
              className="rating-input"></input>
            </div>
          )
        })}
      </div>
      <div className="rating-summary">
        <h3>Total: {ratingTotal}</h3>
        <button type="submit" >Submit</button>
      </div>
    </form>
  );
}

export default RatingForm;
