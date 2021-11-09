import '../styles/Feed.css';
import JobItem from '../components/JobItem.js';
function JobFeedPage() {
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
               [0, 1, 2, 3, 4, 5, 6, 7].map((x) => <JobItem id={x}/>)
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