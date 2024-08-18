import { useReducer, useEffect } from 'react';

export const API_CALL_URL = "https://ratings.svidnet.com/api/"
const REACT_APP_X_API_KEY = process.env.REACT_APP_X_API_KEY


// Basic App State
const INITIAL_STATE = {
  // const token = sessionStorage.getItem('jwtToken');
  authToken: sessionStorage.getItem('jwtToken') || null,

  // App State
  appView: "Home", // Home, Rankings, MyRatings, User
  carouselMovies: {},

  // Ranking State
  rankedMoviesList: [],
  selectedCategory: null,

  // MyRatings State
  unratedMoviesList: [],
  selectedMovieRate: {},
  rateMovie: {},
  categoriesList: [],
}

// Dispatch Actions
export const ACTIONS = {
  SET_ROUTE: "SET_ROUTE",
  SET_SELECTED_MOVIE_RATE: "SET_SELECTED_MOVIE_RATE",
  SET_CAROUSEL: "SET_CAROUSEL",
  SET_UNRATED_MOVIES: "SET_UNRATED_MOVIES",
  SET_CATEGORIES_LIST: "SET_CATEGORIES_LIST",
  SET_RATE_MOVIE: "SET_RATE_MOVIE",
  SET_RANKED_MOVIES_LIST: "SET_RANKED_MOVIES_LIST",
  SET_SELECTED_CATEGORY: "SET_SELECTED_CATEGORY",
  CLEAR_SELECTED_MOVIE_RATE: "CLEAR_SELECTED_MOVIE_RATE"
}

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_ROUTE:
      return {
        ...state,
        appView: action.payload,
      }
    case ACTIONS.SET_SELECTED_MOVIE_RATE:
      return {
        ...state,
        selectedMovieRate: action.payload,
      }
    case ACTIONS.SET_CAROUSEL:
      return {
        ...state,
        carouselMovies: action.payload,
      }
    case ACTIONS.SET_UNRATED_MOVIES:
      return {
        ...state,
        unratedMoviesList: action.payload
      }
    case ACTIONS.SET_CATEGORIES_LIST:
      return {
        ...state,
        categoriesList: action.payload
      }
    case ACTIONS.SET_RATE_MOVIE:
      return {
        ...state,
        rateMovie: action.payload,
        selectedMovieRate: {},
      }
    case ACTIONS.SET_RANKED_MOVIES_LIST:
      return {
        ...state,
        rankedMoviesList: action.payload
      }
    case ACTIONS.SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload
      }
    case ACTIONS.CLEAR_SELECTED_MOVIE_RATE:
      return {
        ...state,
        selectedMovieRate: {}
      }
      
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  // HomePage Carousel
  useEffect(() => {
    
    // Don't fire if no user is logged in
    if (!state.authToken) {
      return;
    }

    fetch(`${API_CALL_URL}top`, {
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('jwtToken')}`,
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_CAROUSEL, payload: data }))
      .catch(err => console.log(err.message))
  }, [])
  
  // GET unratedMoviesList
  useEffect(() => {

    // Don't fire if no user is logged in
    if (!state.authToken) {
      return;
    }
    
    if (state.rateMovie.title) {
      return
    }

    console.log("state.rateMove", state.rateMove)
    fetch(`${API_CALL_URL}movies/no-ratings`, {
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('jwtToken')}`,
        'Content-Type': 'application/json',
      }
    })
    .then((res) => res.json())
    .then((data) => dispatch({ type: ACTIONS.SET_UNRATED_MOVIES, payload: data}))
  }, [state.authToken, state.rateMovie])

  // GET categoriesList
  useEffect(() => {

    // Don't fire if no user is logged in
    if (!state.authToken) {
      return;
    }

    fetch(`${API_CALL_URL}categories`, {
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('jwtToken')}`,
        'Content-Type': 'application/json',
      }
    })
    .then((res) => res.json())
    .then((data) => dispatch({ type: ACTIONS.SET_CATEGORIES_LIST, payload: data }))
  }, [])
  
  // GET rankedMoviesList
  useEffect(() => {

    // Don't fire if no user is logged in
    if (!state.authToken) {
      return;
    }

    let apiString = ""
    if (state.selectedCategory) {
      apiString = `?category_name=${state.selectedCategory}`
    }

    fetch(`${API_CALL_URL}sorted_movies${apiString}`, {
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('jwtToken')}`,
        'Content-Type': 'application/json',
      }
    })
    .then((res) => res.json())
    .then((data) => dispatch({ type: ACTIONS.SET_RANKED_MOVIES_LIST, payload: data }))

  }, [state.selectedCategory, state.rateMovie])


  // POST rateMovie
  useEffect(() => {

    // Don't fire if no user is logged in
    if (!state.authToken) {
      return;
    }
    
    if (state.rateMovie.movieID) {
      fetch(`${API_CALL_URL}ratings`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('jwtToken')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state.rateMovie)
      })
      .then(res => console.log(res))
      .then(() => dispatch({type: ACTIONS.SET_RATE_MOVIE, payload: {}}))
      .catch(err => console.log(err))
    }

  }, [state.rateMovie]) 

  // POST Signup
  useEffect(() => {
    if (state.rateMovie.movieID) {
      fetch(`${API_CALL_URL}register`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('jwtToken')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state.rateMovie)
      })
      .then(res => console.log(res))
      .then(() => dispatch({type: ACTIONS.SET_RATE_MOVIE, payload: {}}))
      .catch(err => console.log(err))
    }

  }, [state.rateMovie])

  return {
    state,
    dispatch
  };
}

export default useApplicationData;