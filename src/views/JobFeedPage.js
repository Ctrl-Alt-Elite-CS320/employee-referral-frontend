import '../styles/Feed.css';
import JobItem from '../components/JobItem.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from '../components/Logo.js';
import Filters from '../components/Filters';
import ReferCandidate from '../components/ReferCandidate';
import { Button } from "react-bootstrap";

import '../styles/ProfileIcon.css';
function JobFeedPage({ setToken}) {
  let [jobs, setJobs] = useState([]);
  let [selectedJob, setSelectedJob] = useState(0);
  useEffect(function () {
    
    axios.get('/positions/all', { params: { compId: 20021 } }).then(res => {
      console.log(res.status);
      if (res.data) {
        console.log(res.data);
        setJobs(res.data);
        setSelectedJob(res.data[0].id);
      }

    });
  }, []);
  // useEffect(function () {

  // }, selectedJob);
  const logout = () => {
    localStorage.setItem('JWT', null);
    axios.defaults.headers.common.Authorization = null;
    setToken(null);
  };

  return (
    <div className="JobFeedPage">
      <div className="feed-header">
        <div className="col-200px">
          <Logo />
        </div>
        <div className="col-200px">
          <h1>Job Feed</h1>
          <h3>Manager</h3>
        </div>
        <div className="col-60 searchHeader">
          <input className="search" type="search" placeholder="Search listings" />
          <form>
            <select className="list-sort">
              <option value="all">All Listings</option>
              <option value="mine">Only My Lisitngs</option>
              <option value="others">Other Listings</option>
            </select>
          </form>
        </div>
        <div className="col-20">
          <Button onClick={logout}>Logout</Button>
          <button className="circle" onClick={() => { }
            }>
            JD
          </button>
        </div>
      </div>
      <div className="filter-container">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Filters />
      </div>
      <div className="main-content">

        {/* <div className="divider">

        </div> */}
        <div className="feed-container">
          <div className="jobs-list col-50">

            <br /><br />

            <div className="scroll-gradient"></div>


            <div className="scroll-gradient"></div>
            {
              jobs.map((x) => <JobItem data={x} key={x.id} select={setSelectedJob} selected={selectedJob == x.id} />)
            }

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

          </div>

          <div className="job-details-container col-50">
            <ReferCandidate job={jobs.find(j=>j.id === selectedJob)}/>
          </div>

        </div>
        <div className="add-button">
          <h1>+</h1>
        </div>
      </div>

    </div>
  );
}

export default JobFeedPage;
