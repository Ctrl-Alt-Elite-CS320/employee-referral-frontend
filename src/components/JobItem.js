import "../styles/JobItem.css";
import React, {useState} from "react"

function JobItem({data}) {
  const [selected, setSelected] = useState(false);
  return (
    <div className={"job-item" + (selected ? " job-item-selected" : "")}
      onClick={() => {
        setSelected(true);
      }}>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <br></br>
      <div className="job-tags"><a>#Software-developer</a>, <a>#Skilled</a></div>
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
          
          Posted on {data.dateposted}
          </div>
        </div>
      
    </div>
  );
}

export default JobItem;