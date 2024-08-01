import React from "react";
import { useContext } from "react";
import MovieDetails from "../components/MovieDetails";
import { applicationContext } from "../hooks/applicationContext";
const MyRatings = () => {

  const { state, dispatch } = useContext(applicationContext);
  console.log("MyRatings", state)

  return(
    <React.Fragment>
      <div>
        <h1>Unrated</h1>
        <ul>
          {state.unratedMoviesList.map((movie) => {
            return(
              <li key={movie.id} onClick={() => dispatch({type: "SET_MOVIE_DETAILS", payload: movie})}>
                <img src={movie.posterLink} />
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        {state.movieDetails.title && <MovieDetails />}
        <div>
          <form>
            <label>Fight</label>
            <input type="number" min="1" max="10" step="1" placeholder="0"></input>

            <label>Comedy</label>
            <input type="number" min="1" max="10" step="1" placeholder="0"></input>
            
            <label>Wow</label>
            <input type="number" min="1" max="10" step="1" placeholder="0"></input>

            <label>Future</label>
            <input type="number" min="1" max="10" step="1" placeholder="0"></input>

            <label>Villain</label>
            <input type="number" min="1" max="10" step="1" placeholder="0"></input>

            <label>Story</label>
            <input type="number" min="1" max="10" step="1" placeholder="0"></input>

            <h3>Total: </h3>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MyRatings;