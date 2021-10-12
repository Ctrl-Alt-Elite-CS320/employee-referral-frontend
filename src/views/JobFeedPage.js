import '../styles/Feed.css';
import JobItem from '../components/JobItem.js';
function JobFeedPage() {
   return (
    <div className="JobFeedPage">
      <div className="filter-container">
         
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
             
             <br></br>
             <br></br>
             <br></br>
             <JobItem />
             <JobItem />
             <JobItem />
             <JobItem />
             <JobItem/>
           </div>
           <div className="job-details col-50">

           </div>
           <div className="add-button">

            </div>
         </div>
         
      </div>
      
    </div>
  );
}

export default JobFeedPage;