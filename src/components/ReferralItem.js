import "../styles/ReferralItem.css";
import React, {useState} from "react"

function ReferralItem({data}) {
  const [selected, setSelected] = useState(false);
  return (
    <div className={"job-item" + (selected ? " job-item-selected" : "")}
      onClick={() => {
        setSelected(true);
      }}>
      <h2>{data.candfirst} {data.candlast}</h2>
      <p>{data.candphone}</p>
      <p>{data.applicantcandemail}</p>
      <br></br>
      <p>{data.canddescription}</p>
      <br></br>
      <p>Referred by {data.managerfirst} {data.managerlast}</p>
      <p>{data.manageremail}</p>
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
