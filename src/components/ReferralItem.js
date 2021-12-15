import "../styles/ReferralItem.css";
import React, {useState} from "react"
import moment from "moment"
function ReferralItem({data}) {
  return (
    <div className={"referral-item"}
      >
      <h2>{data.candfirstname} {data.candlastname}</h2>
      <p>Phone #:{data.candphone}</p>
      <p>Email: {data.candemail}</p>
      <br></br>
      <p>"{data.canddescription}"</p>
      <br></br>
      <div>
        <div className="profile-button">
          {/* <div className="profile-photo">

            <img></img>

          </div> */}

        <div className="owner-info">
            Referred by {data.firstname} {data.lastname} on {moment(data.datetime).format('M/D/YYYY')}  <br></br>
            ({data.email})
          </div>
          
          
        </div>

      </div>
    </div>

    );

}

export default ReferralItem;
