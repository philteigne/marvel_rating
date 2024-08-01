import { useReducer, useEffect } from 'react';

export const API_CALL_URL = "http://localhost:8080/api/"

// Basic App State
const INITIAL_STATE = {
  userID: 1,

  // App State
  appView: "Home", // Home, Rankings, MyRatings, User

  // Ranking State

  // MyRatings State
  unratedMoviesList: [
    {
      id: 1,
      title: "Thor",
      posterLink: "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
      overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat, metus ornare hendrerit mattis, metus nisl mattis nisl, interdum blandit ligula velit ut dui."
    },
    {
      id: 2,
      title: "Shang-Chi",
      posterLink: "https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
      overview: "Nullam ultricies, ipsum in luctus scelerisque, nibh nibh consequat metus, quis semper urna elit quis libero."
    },
    {
      id: 3,
      title: "Black Panther Wakanda Forever",
      posterLink: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
      overview: "Praesent risus metus, tempor non dictum non, convallis non justo. Aliquam massa ligula, tristique ac ornare ac, dictum non tortor."
    }
  ],
  movieDetails: {},
}

// Dispatch Actions
export const ACTIONS = {
  SET_ROUTE: "SET_ROUTE",
  SET_MOVIE_DETAILS: "SET_MOVIE_DETAILS",
}

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_ROUTE:
      return {
        ...state,
        appView: action.payload,
      }
    case ACTIONS.SET_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.payload,
      }

      
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  
  // AI CHATBOT
  // useEffect(() => {
  //   if (state.chatQuery) {
  //     handleAIChatRequest(state.chatQuery.message, state.chatSettings.chatVoice);
  //   }
  // }, [state.chatQuery, handleAIChatRequest]);


  // calling useApplicationData function return these functions that changes states
  return {
    state,
    dispatch
  };
}

export default useApplicationData;