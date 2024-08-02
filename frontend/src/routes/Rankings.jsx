import '../App.css'
import '../styles/Rankings.css'

import React from "react";
import { useContext } from "react";
import { applicationContext } from "../hooks/applicationContext";

const Rankings = () => {

  const { state, dispatch } = useContext(applicationContext);

  return(
    <React.Fragment>
      <div>
        <div className='header-controls'>
          <h1>Movie Rankings By Category</h1>
          <div className="view-controls">
            <button>Cat</button>
            <button>List</button>
          </div>
        </div>
        <ul className='category-list'>
          {state.categoriesList.length > 0 &&
            state.categoriesList.map((category) => {
              return(
                <li key={category.id} onClick={() => dispatch({ type: "SET_SELECTED_CATEGORY", payload: category.name })} className='category-item'>
                  {category.name}
                </li>
              )
            })
          }
          <li onClick={() => dispatch({ type: "SET_SELECTED_CATEGORY", payload: null })} className='category-item'>
            Total Rating
          </li>
        </ul>
      </div>
      <ul className='movie-list'>
        {state.rankedMoviesList.length > 0 &&
          state.rankedMoviesList.map((movie, index) => {
            return(
              <li key={movie.id} className='movie-item'>
                <h2 className='movie-ranking'>{index + 1}.</h2>
                <div className='movie-container'>
                  <img src={movie.poster_url} className='movie-poster'></img>
                  <p className='movie-title'>{movie.title}</p>
                  <p className='movie-rating'>{state.selectedCategory || "Total"} Rating: {movie.average_rating}</p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </React.Fragment>
  );
}

export default Rankings;