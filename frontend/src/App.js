import './App.css';

import Home from './routes/Home';
import AllRankings from './routes/AllRankings';
import Rate from './routes/Rate';
import User from './routes/User';

function App() {

  const state = {
    currentView: "User",
  }

  return (
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
      {state.currentView === "AllRankings" && <AllRankings />}
      {state.currentView === "Rate" && <Rate />}
      {state.currentView === "User" && <User />}
    </div>
  );
}

export default App;
