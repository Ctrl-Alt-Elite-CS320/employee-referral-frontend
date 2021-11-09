
import '../styles/login.css';
import '../js/login.js';
import '../styles/App.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import axios from "axios";
function Login({ setToken }) {
  const [loginEmail,setLoginEmail] = useState('');
  const [loginPass,setLoginPass] = useState('');
  // const json = JSON.stringify(data, null, 4);
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("handleLogin");
    axios.post('localhost:6500/api/auth/signin', {
        username: loginEmail,
        password: loginPass
      })
      .then(function (response) {
        alert(response);
      })
      .catch(function (error) {
        alert(error);
      });
    
    // const options = {
    //   hostname: 'localhost',
    //   port: 6500,
    //   path: '/api/auth/signin',
    //   method: 'POST',
    //   body: JSON.stringify({ email: loginEmail, password: loginPass})
    // }
    // const https = require('https');

    // const req = https.request(options, res => {
    //   console.log(`statusCode: ${res.statusCode}`);
      
    //   res.on('data', d => {
    //     console.log(d);
    //   });
    // });
    // setToken("a");
    // console.clear();
    // console.log(json);
  }
  const handleSignup = (data) => {
    const json = JSON.stringify(data, null, 4);
    console.clear();
    console.log(json);
  }
  
  return (<div className="App">
    <header className="App-header">
        
      Sinecure
    </header>
      
    <div className="materialContainer">
      <div className="box">
        <form onSubmit={handleLogin}>

          <div className="title">LOGIN</div>

          <div className="input">
            <label htmlFor="email">E-Mail</label>
            <input type="text" name="email" id="email" onChange={(event)=>setLoginEmail(event.target.value)}></input>
            <span className="spin"></span>
          </div>

          <div className="input">
            <label htmlFor="pass">Password</label>
            <input type="password" name="pass" id="pass" onChange={(event)=>setLoginPass(event.target.value)}></input>
            <span className="spin"></span>
          </div>

          <div className="button login">
            <button type="submit"><span>GO</span> <i className="fa fa-check"></i></button>
          </div>

          <a href="" className="pass-forgot">Forgot your password?</a>

        </form>
      </div>

      <div className="overbox">
        <form onSubmit={handleSignup}>
          <div className="material-button alt-2"><span className="shape"></span></div>

          <div className="title">REGISTER</div>

          <div className="input">
            <label htmlFor="regname">Username</label>
            <input type="text" name="regname" id="regname"></input>
            <span className="spin"></span>
          </div>

          <div className="input">
            <label htmlFor="regpass">Password</label>
            <input type="password" name="regpass" id="regpass"></input>
            <span className="spin"></span>
          </div>

          <div className="input">
            <label htmlFor="reregpass">Repeat Password</label>
            <input type="password" name="reregpass" id="reregpass"></input>
            <span className="spin"></span>
          </div>

          <div className="button">
            <button type="submit"><span>NEXT</span></button>
          </div>
        </form>
      </div>
      <div className="register-msg">
        <p>
          &lt;-- Register Here
        </p>
      </div>
    </div>
  </div>);
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
export default Login;