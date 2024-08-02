import React from "react";
import { useContext } from "react";
import { applicationContext } from "../hooks/applicationContext";

const Rankings = () => {

  const { state, dispatch } = useContext(applicationContext);

  return(
    <React.Fragment>
      <div>
        {/* only display categories list if categoriesList is populated */}
        {state.categoriesList.map((category) => {
          return(
            <button key={category.id} onClick={() => dispatch({ type: "SET_SELECTED_CATEGORY", payload: category.name })}>
              {category.name}
            </button>
          )
        })}
        <button onClick={() => dispatch({ type: "SET_SELECTED_CATEGORY", payload: null })}>
          Total Rating
        </button>
      </div>
      <ul>
        {state.rankedMoviesList.map((movie) => {
          return(
            <li key={movie.id}>
              {movie.title}: {movie.average_rating}
            </li>
          )
        })}
      </ul>
    </React.Fragment>
  );
}

export default Rankings;