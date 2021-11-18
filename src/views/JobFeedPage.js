import '../styles/Feed.css';
import JobItem from '../components/JobItem.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
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
      </div>
      <div className="main-content">
         <div className="feed-header">
           <div>
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
           </div>
           
         </div>
         <div className="add-button">
         </div>
      </div>
      
    </div>
  );
}

export default JobFeedPage;