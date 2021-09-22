import logo from './logo.svg';
import './App.css';

/*
Home Page
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the homepage for our application
        </p>
        
      </header>
      <div>
        <form>
          <input type="text" className="" placeholder="Username"></input>
          <br></br>
          <input type="text" className="" placeholder="Password"></input>
          <br></br>
          <button type="submit" className="">Login</button>
          <p>or</p>
          <button type="submit" className="">Sign Up</button>
        </form>
      </div>
      
    </div>
  );
}

export default App;
