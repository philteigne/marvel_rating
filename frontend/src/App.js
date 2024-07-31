import './App.css';

import Home from './routes/Home';
import Rankings from './routes/Rankings';
import Rate from './routes/Rate';
import User from './routes/User';

import useApplicationData from './hooks/stateReducer';
import { applicationContext } from './hooks/applicationContext';

function App() {

  const { state, dispatch } = useApplicationData();
  console.log(state)

  return (
    <applicationContext.Provider value={{state, dispatch}}>
      <div className="App">
        <nav>
          <ul>
            <li onClick={() => dispatch({type: "SET_ROUTE", payload: "Home"})}>Home</li>
            <li onClick={() => dispatch({type: "SET_ROUTE", payload: "Rankings"})}>Rankings</li>
            <li onClick={() => dispatch({type: "SET_ROUTE", payload: "Rate"})}>Rate</li>
            <li onClick={() => dispatch({type: "SET_ROUTE", payload: "User"})}>User Settings</li>
          </ul>
        </nav>
        {state.appView === "Home" && <Home />}
        {state.appView === "Rankings" && <Rankings />}
        {state.appView === "Rate" && <Rate />}
        {state.appView === "User" && <User />}
      </div>
    </applicationContext.Provider>
  );
}

export default App;
