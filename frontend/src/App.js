import './App.css';

import Home from './routes/Home';
import AllRankings from './routes/AllRankings';

function App() {

  const state = {
    currentView: "AllRankings",
  }

  return (
    <div className="App">
      <nav>
        <ul>
          <li>Home</li>
          <li>All Rankings</li>
          <li>My Rankings</li>
          <li>User Settings</li>
        </ul>
      </nav>
      {state.currentView === "Home" && <Home />}
      {state.currentView === "AllRankings" && <AllRankings />}
    </div>
  );
}

export default App;
