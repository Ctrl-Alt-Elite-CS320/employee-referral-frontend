import React from "react";
import '../../styles/JobItem.css';

function JobItem({listing}) {
    return (
        <div className="job-item-container">
            <h2>{listing.title}</h2><br />
            <p>{listing.description}</p>
            <br /><br />
            <div className="job-tags">
                <a>{listing.tag1}</a>
                <a>{listing.tag2}</a>
            </div>
            <br /><br />
            <div className="job-posted-details">
                <div className="profile-button">
                    <div className="profile-photo">
                        <img></img>
                    </div>
                    &nbsp;
                    <a>{listing.name}</a>
                </div>
                <div className="">
                    <a>{listing.date}</a>
                </div>
            </div>
        </div>
    );
}

export default JobItem;