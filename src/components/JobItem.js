import "../styles/JobItem.css";
import React, {useState} from "react"
import axios from "axios";
import moment from "moment";
function JobItem({data, select, selected, generate, setLoading}) {
  return (
    <div className={"job-item" + (selected ? " job-item-selected" : "")}
      onClick={() => {
        if(!selected){
          setLoading(true);
          axios.get(`/positions/${data.id}/applications/all`).then(res => {
              if(res.status == 200){
                  generate(res.data)
              }else if(res.status == 404){
                  console.log("here");
                  generate([]);
              }
          }).catch((err) => {
              console.log(err);
              generate([]);
          }).finally(() => {
              setLoading(false);
          });
        }
        select(data.id);
      }}>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <br></br>
      <div className="job-tags"><a>#Software-developer</a>, <a>#Skilled</a></div>
      <br></br>
      <div className="job-posted-details">
        <div className="profile-button">
          {/* <div className="profile-photo">

            <img></img>

          </div> */}

        <div className="owner-info">

          Posted on {moment(data.dateposted).format('M/D/YYYY')}
          </div>
        </div>

      </div>
    </div>

    );

}

export default JobItem;
