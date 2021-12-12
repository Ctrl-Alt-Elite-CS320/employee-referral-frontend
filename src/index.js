import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./views/App";
import JobFeedPage from "./views/JobFeedPage";
import NewPosition from "./views/NewPosition";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/jobsfeed" element={<JobFeedPage />} />

        <Route path="/newposition" element={<NewPosition />} />

        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
