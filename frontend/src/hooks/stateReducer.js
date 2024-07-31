import { useReducer, useEffect } from 'react';

export const API_CALL_URL = "http://localhost:8080/api/"

// Basic App State
const INITIAL_STATE = {
  userID: 1,

  appView: "Home", // Home, Rankings, Rate, User
}

// Dispatch Actions
export const ACTIONS = {
  SET_ROUTE: "SET_ROUTE"
}

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_ROUTE:
      return {
        ...state,
        appView: action.payload,
      }
    // case ACTIONS.GET_INGREDIENTS_USER:
    //   return {
    //     ...state,
    //     ingredientList: action.payload,
    //   }
      
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