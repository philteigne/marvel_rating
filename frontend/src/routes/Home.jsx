import React from "react";
import { useContext } from "react";

import MovieDetails from "../components/MovieDetails";
import { applicationContext } from "../hooks/applicationContext";

const Home = () => {

  const { state, dispatch } = useContext(applicationContext);

  return (
    <div>
        <h1>
          Top Movie
        </h1>
        {state.carouselMovies.highest_rated_movie && <MovieDetails />}
      </div>
  );
}

export default Home;