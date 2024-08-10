import '../App.css'
import '../styles/Rankings.css'

import React from "react";
import { useContext } from "react";
import { applicationContext } from "../hooks/applicationContext";

const Rankings = () => {

  const { state, dispatch } = useContext(applicationContext);

  return(
    <div className='ranking-container'>
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
      <ul className='movie-ranking-list'>
        {state.rankedMoviesList.length > 0 &&
          state.rankedMoviesList.map((movie, index) => {
            return(
              <li key={movie.id} className='movie-ranking-item'>
                <h2 className='movie-ranking'>{index + 1}.</h2>
                <div className='movie-ranking-container'>
                  <img src={movie.poster_url} className='movie-ranking-poster'></img>
                  <p className='movie-ranking-title'>{movie.title}</p>
                  <p className='movie-ranking-rating'>{state.selectedCategory || "Total"} Rating: {movie.average_rating}</p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Rankings;