import React from "react";
import { useContext, useState, useEffect } from "react";

import { applicationContext } from "../hooks/applicationContext";

const RatingModal = () => {

  const { state, dispatch } = useContext(applicationContext);
  const [movieRating, setMovieRating] = useState({})
  const [ratingTotal, setRatingTotal] = useState(0)
  const [inputValue, setInputValue] = useState('')

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
      movieID: state.selectedMovieRate.id,
      ratings: movieRating
    }

    dispatch({ type: "SET_RATE_MOVIE", payload: ratingSubmitObj })
  }

  // Initialize movieRating based on selectedMovieRate
  useEffect(() => {
    const initialRatings = {};
    state.selectedMovieRate.ratings.forEach((item) => {
      initialRatings[item.category_id] = {
        id: item.category_id,
        rating: item.rating,
      };
    });
    setMovieRating(initialRatings);

  }, [state.selectedMovieRate]);

  useEffect(() => {
    console.log("finding average")
    setRatingTotal(findRatingAverage(movieRating));
  }, [movieRating, state.selectedMovieRate]);

  return(
    <div className="modal" onClick={() => {
      dispatch({type: "CLEAR_SELECTED_MOVIE_RATE"})
    }}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
      <span class="modal-close" onClick={() => {
          dispatch({type: "CLEAR_SELECTED_MOVIE_RATE"})
        }}>&times;</span>
        <div className="modal-content">
          <div className="modal-info">
            <img src={state.selectedMovieRate.poster_url} className="modal-movie-poster"/>
            <div className="modal-movie-details">
              <h3 className="modal-header">{state.selectedMovieRate.title}</h3>
              <p className='movie-overview'>{state.selectedMovieRate.overview}</p>
              <h3 className="modal-header">Average Rating</h3>
              <p>{state.selectedMovieRate.average_rating || "No Ratings Yet"}</p>

            </div>
            
          </div>
          <form onSubmit={handleSubmit} className="modal-rating-form">
            <h3 className="modal-header">Your Ratings</h3>
            <div className="modal-rating-input-container">
              {state.categoriesList.map((category) => {
                // if movie has rating for this category, set the value of the input to match the rating
                let defaultInputValue = 0;
                if (state.selectedMovieRate.ratings.length > 0) {
                  for(let item of state.selectedMovieRate.ratings) {
                    if (item.category_id === category.id) {
                      defaultInputValue = item.rating;
                      break;
                    }
                  }
                }
                
                return (
                  <div className="modal-rating-input">
                    <label key={category.id} className="modal-rating-label">{category.name.toUpperCase()}</label>
                    <input type="number" min="1" max="10" step="1" defaultValue={defaultInputValue}
                      onChange={(e) => { 
                        setMovieRating({
                          ...movieRating,
                          [category.id]: {
                            id: category.id,
                            rating: e.target.value
                          }
                        })
                      }}
                      onFocus={(e) => {
                        e.target.value = ""
                      }}
                    className="modal-rating-input-number"></input>
                  </div>
                )
              })}
            </div>
            <div className="modal-rating-summary">
              <div className="modal-rating-input">
                <label className="modal-rating-label">TOTAL</label>
                <input type="number" value={ratingTotal} readonly className="modal-rating-input-number"></input>
              </div>
              <button type="submit" className="modal-submit-button" onClick={() => handleSubmit}
              >Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RatingModal;
