import './App.css';

import Home from './routes/Home';
import Rankings from './routes/Rankings';
import Rate from './routes/Rate';
import User from './routes/User';

import useApplicationData from './hooks/stateReducer';
import { applicationContext } from './hooks/applicationContext';

function App() {

  const { state, dispatch } = useApplicationData();



  return (
    <applicationContext.Provider value={{state, dispatch}}>
      <div className="App">
        <nav>
          <ul>
            <li>Home</li>
            <li>All Rankings</li>
            <li>Rate</li>
            <li>User Settings</li>
          </ul>
        </nav>
        {state.currentView === "Home" && <Home />}
        {state.currentView === "Rankings" && <Rankings />}
        {state.currentView === "Rate" && <Rate />}
        {state.currentView === "User" && <User />}
      </div>
    </applicationContext.Provider>
  );
}

export default App;
