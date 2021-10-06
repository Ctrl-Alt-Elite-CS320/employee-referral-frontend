import logo from './logo.svg';
import './App.css';
import './styles/login.css';
import './js/login.js';
/*
Home Page
 */

function App() {
  return (
    <div className="App">
      <header class="App-header">
        
        Sinecure
      </header>
      <div class="materialContainer">
        <div class="box">

          <div class="title">LOGIN</div>

          <div class="input">
            <label for="name">Username</label>
            <input type="text" name="name" id="name"></input>
            <span class="spin"></span>
          </div>

          <div class="input">
            <label for="pass">Password</label>
            <input type="password" name="pass" id="pass"></input>
            <span class="spin"></span>
          </div>

          <div class="button login">
            <button><span>GO</span> <i class="fa fa-check"></i></button>
          </div>

          <a href="" class="pass-forgot">Forgot your password?</a>

        </div>

        <div class="overbox">
          <div class="material-button alt-2"><span class="shape"></span></div>

          <div class="title">REGISTER</div>

          <div class="input">
            <label for="regname">Username</label>
            <input type="text" name="regname" id="regname"></input>
            <span class="spin"></span>
          </div>

          <div class="input">
            <label for="regpass">Password</label>
            <input type="password" name="regpass" id="regpass"></input>
            <span class="spin"></span>
          </div>

          <div class="input">
            <label for="reregpass">Repeat Password</label>
            <input type="password" name="reregpass" id="reregpass"></input>
            <span class="spin"></span>
          </div>

          <div class="button">
            <button><span>NEXT</span></button>
          </div>

        </div>
      </div>
      </div>
      
      
  );
}

export default App;
