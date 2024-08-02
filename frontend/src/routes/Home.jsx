import '../App.css'
import '../styles/Home.css'

import React from "react";
import { useContext } from "react";

import MovieDetails from "../components/MovieDetails";
import { applicationContext } from "../hooks/applicationContext";

const Home = () => {

  const { state, dispatch } = useContext(applicationContext);

  return (
    <div className='movie-showcase'>
      <h1>
        Your Friends' Top Picks
      </h1>
      {state.carouselMovies.highest_rated_movie && <MovieDetails />}
    </div>
  );
}

export default Home;