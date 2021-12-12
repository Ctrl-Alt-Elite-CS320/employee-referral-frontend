import Login from '../views/Login';
import JobFeedPage from '../views/JobFeedPage';
import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import {  } from "react-router";
import { useState } from 'react';
/*
Home Page
 */

function App() {
  const [token, setToken] = useState(localStorage.getItem('JWT'));
  console.log("token:", token);
  if (token == null || token == "null") {
    console.log("Token not found.. ");
    return <Login setToken={setToken}/>
  } else {
    console.log("Token found.. logging in...");
     return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route exact path="/" element={<JobFeedPage setToken={setToken}/>}/>
        </Routes>
      </Router>
    </React.StrictMode>);
  }
 
}

export default App;
