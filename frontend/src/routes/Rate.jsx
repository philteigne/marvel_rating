import React from "react";
import MovieDetails from "../components/MovieDetails";

const Rate = () => {
  return(
    <React.Fragment>
      <div>
        <h1>Unrated</h1>
        <ul>
          <li>Thor</li>
          <li>Iron Man</li>
          <li>Captain America</li>
        </ul>
      </div>
      <div>
        <MovieDetails />
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

export default Rate;