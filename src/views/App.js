import logo from '../assets/logo.svg';
import '../styles/App.css';
import '../styles/login.css';
import '../js/login.js';
/*
Home Page
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        Sinecure
      </header>
      
      <div className="materialContainer">
        <div className="box">
          <form action="/jobsfeed">

          <div className="title">LOGIN</div>

          <div className="input">
            <label for="name">Username</label>
            <input type="text" name="name" id="name"></input>
            <span className="spin"></span>
          </div>

          <div className="input">
            <label for="pass">Password</label>
            <input type="password" name="pass" id="pass"></input>
            <span className="spin"></span>
          </div>

          <div className="button login">
            <button type="submit" value="login"><span>GO</span> <i className="fa fa-check"></i></button>
          </div>

          <a href="" className="pass-forgot">Forgot your password?</a>

          </form>
        </div>

        <div className="overbox">
          <form action="/jobsfeed">
          <div className="material-button alt-2"><span className="shape"></span></div>

          <div className="title">REGISTER</div>

          <div className="input">
            <label for="regname">Username</label>
            <input type="text" name="regname" id="regname"></input>
            <span className="spin"></span>
          </div>

          <div className="input">
            <label for="regpass">Password</label>
            <input type="password" name="regpass" id="regpass"></input>
            <span className="spin"></span>
          </div>

          <div className="input">
            <label for="reregpass">Repeat Password</label>
            <input type="password" name="reregpass" id="reregpass"></input>
            <span className="spin"></span>
          </div>

          <div className="button">
            <button type="submit" value="signup"><span>NEXT</span></button>
          </div>
          </form>
        </div>
        <div className="register-msg">
          <p>
            &lt;-- Register Here
          </p>
        </div>
      </div>
      </div>
      
      
  );
}

export default App;
