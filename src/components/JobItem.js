import "../styles/JobItem.css";
import React, {useState} from "react"

function JobItem({data, select, selected}) {
  return (
    <div className={"job-item" + (selected ? " job-item-selected" : "")}
      onClick={() => {
        select(data.id);
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

        <div className="owner-info">

          Posted on {data.dateposted}
          </div>
        </div>

      </div>
    </div>

    );

}

export default JobItem;
