import Login from '../views/Login';
import JobFeedPage from '../views/JobFeedPage';
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
/*
Home Page
 */

function App() {
  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken={setToken}/>
  }
  return (
    <React.StrictMode>
      <Router>
        <Switch>
        
          <Route path="/jobsfeed">
            <JobFeedPage />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>);
}

export default App;
