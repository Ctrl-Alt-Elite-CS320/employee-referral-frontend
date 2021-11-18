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
  const [token, setToken] = useState(sessionStorage.getItem('JWT'));

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <React.StrictMode>
      <Router>
        <Routes>
        
          <Route exact path="/" element={<JobFeedPage />}/>
          <Route path="/login" element={<Login setToken={setToken} />}/>
        </Routes>
      </Router>
    </React.StrictMode>);
}

export default App;
