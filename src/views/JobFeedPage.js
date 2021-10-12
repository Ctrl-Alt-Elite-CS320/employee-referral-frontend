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
         <div className="divider">

         </div>
         <div className="feed-container">
           <div className="jobs-list col-50">
             
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