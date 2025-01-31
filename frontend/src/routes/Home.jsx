import '../App.css'

import React from "react";
import { useContext } from "react";

import MovieDetails from "../components/MovieDetails";
import { applicationContext } from "../hooks/applicationContext";

const Home = () => {

  const { state, dispatch } = useContext(applicationContext);

  return (
    <div className='home-container'>
      {state.authToken &&
        <div className='movie-showcase'>
          <h1 className='page-header'>
            Friends' Top Picks
          </h1>
          {state.carouselMovies.highest_rated_movie && <MovieDetails />}
        </div>
      }
      {!state.authToken &&
        <div className='welcome-container'>
          <h1 className='welcome-header'>
            Welcome To TasteBuds
          </h1>
          <p className='welcome-paragraph'>
            The ultimate destination for movie lovers who enjoy sharing their cinematic adventures with friends!
          </p>
          <p className='welcome-paragraph'>
            Here at TasteBuds, you can rate movies, discover new films, and see what your friends think about the latest releases. Dive into a world where your taste in movies connects you with like-minded friends, creating a vibrant community of cinephiles.
          </p>
          <p className='welcome-paragraph'>
            Whether you're raving about a blockbuster hit or dissecting an indie gem, TasteBuds is the perfect place to share your thoughts and discover your next favorite film together. Happy rating!
          </p>
          <button onClick={() => dispatch({type: "SET_ROUTE", payload: "User"})} className='welcome-button'>
            Get Started
          </button>
        </div>
      }

    </div>
  );
}

export default Home;