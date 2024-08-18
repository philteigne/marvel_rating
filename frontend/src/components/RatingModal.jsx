import React from "react";
import { useContext, useState, useEffect } from "react";

import { applicationContext } from "../hooks/applicationContext";

import '../styles/Modal.css'

const RatingModal = () => {

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
      movieID: state.selectedMovieRate.id,
      ratings: movieRating
    }

    dispatch({ type: "SET_RATE_MOVIE", payload: ratingSubmitObj })
  }

  useEffect(() => {
    setRatingTotal(findRatingAverage(movieRating));
  }, [movieRating]);

  return(
    <div className="modal" onClick={() => {
      dispatch({type: "CLEAR_SELECTED_MOVIE_RATE"})
    }}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
      <span class="modal-close" onClick={() => {
          dispatch({type: "CLEAR_SELECTED_MOVIE_RATE"})
        }}>&times;</span>
        <div className="modal-content">
          <img src={state.selectedMovieRate.poster_url} className="modal-movie-poster"/>

          <div className="modal-info">
            <div className="modal-movie-details">
              <h3>{state.selectedMovieRate.title}</h3>
              <p className='movie-overview'>{state.selectedMovieRate.overview}</p>
            </div>
            <form onSubmit={handleSubmit} className="modal-rating-form">
              <div className="modal-rating-input-container">
                {state.categoriesList.map((category) => {
                  return (
                    <div className="modal-rating-input">
                      <label key={category.id} className="modal-rating-label">{category.name}</label>
                      <input type="number" min="1" max="10" step="1" placeholder="0" onChange={(e) => { 
                        setMovieRating({
                          ...movieRating,
                          [category.id]: {
                            id: category.id,
                            rating: e.target.value
                          }
                        })
                      }}
                      className="modal-rating-input-number"></input>
                    </div>
                  )
                })}
              </div>
              <div className="modal-rating-summary">
                <div className="modal-rating-input">
                  <label className="modal-rating-label">Total</label>
                  <input type="number" value={ratingTotal} readonly className="modal-rating-input-number"></input>
                </div>
                <button type="submit" className="modal-submit-button" onClick={() => handleSubmit}
                >Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RatingModal;
