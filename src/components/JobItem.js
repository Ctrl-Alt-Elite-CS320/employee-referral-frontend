import React from "react";
import "../styles/JobItem.css";

class JobItem extends React.Component {
  render() {
    let { name, EarlySalary, Description } = this.props;

    return (
      <div className="job-item">
        <h2>{name}</h2>
        <br />
        <p>{Description}</p>
        <br></br>
        <div className="job-tags">
          <a>#Software-developer</a> <a>#Skilled</a>
        </div>
        <br></br>
        <div className="job-posted-details">
          <div className="profile-button">
            <div className="profile-photo">
              <img></img>
            </div>
            &nbsp; John Doe
          </div>

          <div className="owner-info">Posted on 9/19/2021</div>
        </div>
      </div>
    );
  }
}

export default JobItem;
