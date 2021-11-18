import '../styles/Feed.css';
import JobItem from '../components/JobItem.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from '../components/Logo.js';
import Filters from '../components/Filters';
import ReferCandidate from '../components/ReferCandidate';
import ProfileIcon from '../components/ProfileIcon';

function JobFeedPage() {
  let [jobs, setJobs] = useState([]);
  useEffect(function () {
    axios.get('/positions/all', { params: { compId: 20021 } }).then(res => {
    console.log(res.status);
    if (res.data) {
      console.log(res.data);
      setJobs(res.data);
    }

  });
  }, []);
   return (
    <div className="JobFeedPage">
      <div className="filter-container">
         <div style={{ backgroundColor: "black", width: "50px", height: "50px" }}></div>
        <Logo />
        <Filters />
      </div>
      <div className="main-content">
        <div className="feed-header">
          <div className="col-80">
            <h1>Job Feed</h1>
            <h3>Manager</h3>
           </div>

         </div>
         <div className="feed-container">
           <div className="jobs-list col-50">

             <div className="scroll-gradient"></div>
             {
               jobs.map((x) => <JobItem data={x} key={x.id}/>)
             }

             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>

           </div>
           <div className="job-details-container col-50">
            <div className="job-details">

          </div>
          <div className="col-20">
            <ProfileIcon />
          </div>
        </div>
        <div className="divider">

        </div>
        <div className="feed-container">
          <div className="jobs-list col-50">
            <div>
              <input className="search" type="search" placeholder="Search listings" />
              <form>
                <select className="list-sort">
                  <option value="all">All Listings</option>
                  <option value="mine">Only My Lisitngs</option>
                  <option value="others">Other Listings</option>
                </select>
              </form>
            </div>
            <br /><br />

            <div className="scroll-gradient"></div>

            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

          </div>
          <div className="job-details-container col-50">
            <ReferCandidate />
          </div>

        </div>
        <div className="add-button">
          <h1>+</h1>
        </div>
      </div>

       </div>
    </div>
  );
}

export default JobFeedPage;
