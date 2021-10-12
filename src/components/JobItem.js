import "../styles/JobItem.css";


function JobItem() {
  return (
    <div className="job-item">
      <h2>Job Title</h2>
      <p>Lorem ipsum dolor sit amet consectetur adip
        Lorem ipsum dolor sit amet consectetur adip
        Lorem ipsum dolor sit amet consectetur adip
        Lorem ipsum dolor sit amet consectetur adip
        Lorem ipsum dolor sit amet consectetur adip
      </p>
      <br></br>
      <div className="job-tags"><a>#Software-developer</a> <a>#Skilled</a></div>
      <br></br>
      <div className="job-posted-details">
        <div className="profile-button">
          <div className="profile-photo">
          
            <img></img>
            
          </div>
          &nbsp;
          John Doe
          
        </div>
        

        <div className="owner-info">
          
          Posted on 9/19/2021
          </div>
        </div>
      
    </div>
  );
}

export default JobItem;