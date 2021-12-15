import "../styles/ReferralItem.css";
import React, {useState} from "react"

function ReferralItem({data}) {
  return (
    <div className={"job-item"}>
      <h2>{data.candfirstname} {data.candlastname}</h2>
      <p>{data.candphone}</p>
      <p>{data.candemail}</p>
      <br></br>
      <p>{data.canddescription}</p>
      <br></br>
      <p>Referred by {data.firstname} {data.lastname}</p>
      <p>{data.email}</p>
      <br></br>
      <div className="job-posted-details">
        <div className="profile-button">
          <div className="profile-photo">

            <img></img>

          </div>

        <div className="owner-info">
          Referred on {data.datetime}
          </div>
          
          
        </div>

      </div>
    </div>

    );

}

export default ReferralItem;
