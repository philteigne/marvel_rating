import './App.css';

import Home from './routes/Home';
import Rankings from './routes/Rankings';
import MyRatings from './routes/MyRatings';
import User from './routes/User';

import useApplicationData from './hooks/stateReducer';
import { applicationContext } from './hooks/applicationContext';

function App() {

  const { state, dispatch } = useApplicationData();

  const logOutUser = () => {
    sessionStorage.clear();
    window.location.reload()
  }

  return (
    <applicationContext.Provider value={{state, dispatch}}>
      <div className="App">
        <span className='background'></span>
        <nav>
          {state.authToken &&
            <ul className='nav-list'>
              <li onClick={() => dispatch({type: "SET_ROUTE", payload: "Home"})} className='nav-list-item'>Home</li>
              <li onClick={() => dispatch({type: "SET_ROUTE", payload: "Rankings"})} className='nav-list-item'>Rankings</li>
              <li onClick={() => dispatch({type: "SET_ROUTE", payload: "MyRatings"})} className='nav-list-item'>My Ratings</li>
              <li onClick={() => logOutUser()} className='nav-list-item nav-edge'>Log Out</li>
            </ul>
            }
          {!state.authToken &&
            <ul className='nav-list'>
              <li onClick={() => dispatch({type: "SET_ROUTE", payload: "User"})} className='nav-list-item nav-edge'>Log In</li>
            </ul>
          }
        </nav>
        {state.appView === "Home" && <Home />}
        {state.appView === "Rankings" && <Rankings />}
        {state.appView === "MyRatings" && <MyRatings />}
        {state.appView === "User" && <User />}
      </div>
    </applicationContext.Provider>
  );
}

export default App;
