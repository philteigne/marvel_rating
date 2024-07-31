import logo from './logo.svg';
import './App.css';

function App() {

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
      <div>
        <h1>
          Top Movie
        </h1>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Movie Title</h2>
          <p>Movie overview text but more like a paragraph it'll be pretty long</p>
        </div>
      </div>
    </div>
  );
}

export default App;
