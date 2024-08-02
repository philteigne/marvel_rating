import './App.css';
import './styles/nav.css';

import Home from './routes/Home';
import Rankings from './routes/Rankings';
import MyRatings from './routes/MyRatings';
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
          <a>LogoText</a>
          <ul className='nav-list'>
            <li onClick={() => dispatch({type: "SET_ROUTE", payload: "Home"})} className='nav-list-item'>Home</li>
            <li onClick={() => dispatch({type: "SET_ROUTE", payload: "Rankings"})} className='nav-list-item'>Rankings</li>
            <li onClick={() => dispatch({type: "SET_ROUTE", payload: "MyRatings"})} className='nav-list-item'>MyRatings</li>
            <li onClick={() => dispatch({type: "SET_ROUTE", payload: "User"})} className='nav-list-item'>User Settings</li>
          </ul>
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
