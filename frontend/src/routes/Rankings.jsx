import '../App.css'

import React from "react";
import { useContext } from "react";
import { applicationContext } from "../hooks/applicationContext";

const Rankings = () => {

  const { state, dispatch } = useContext(applicationContext);

  return(
    <div className='ranking-container'>
      <div>
        <h1 className='page-header'>Rankings By Category</h1>
        <ul className='category-list'>
          {state.categoriesList.length > 0 &&
            state.categoriesList.map((category) => {
              return(
                <li key={category.id} onClick={() => dispatch({ type: "SET_SELECTED_CATEGORY", payload: category.name })} className='category-item'>
                  <h3 className={category.name === state.selectedCategory ? 'underline' : ''}>{category.name}</h3>
                </li>
              )
            })
          }
          <li onClick={() => dispatch({ type: "SET_SELECTED_CATEGORY", payload: null })} className='category-item'>
            <h3 className={!state.selectedCategory ? 'underline' : ''}>Total</h3>
          </li>
        </ul>
      </div>
      <ul className='movie-ranking-list'>
        {state.rankedMoviesList.length > 0 &&
          state.rankedMoviesList.map((movie, index) => {
            return(
              <li key={movie.id} className='movie-ranking-item'>
                <h4 className='movie-ranking'>{index + 1}</h4>
                <div className='movie-ranking-container'>
                  <img src={movie.poster_url} className='movie-ranking-poster'></img>
                  <h4 className='movie-ranking-title'>{movie.title}</h4>
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