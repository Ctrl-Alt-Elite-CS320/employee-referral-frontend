import React, { useState } from "react";
import '../styles/ReferCandidate.css';
import axios from 'axios';

const ReferCandidate = ({job})=> {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const handleRefererSubmit = (e) => {
        e.preventDefault();

        // Refer a candidate for selected job here by calling the API
        // console.log(job);
        // console.log(first);
        axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('JWT')}`;

        axios.post('/positions/applications/new', {
            positionId: job.id,
            candidateFirstname: first,
            candidateLastname: last,
            candidateEmail: email,
            candidatePhone: phone,
            candidateDescription: message,
        }).then(res => {
            console.log("NEW POSITION STATUS:");
            console.log(res.status);
        });
    }
    return (
        <div className="refer">
            <div className="refer-header">
                <div>
                    <h1>Refer a candidate for:</h1><br />
                    <h2>{job?.title}</h2>
                </div>
            </div>
            <br /><br />
            <div>
                <div>
                    <form onSubmit={handleRefererSubmit}>
                        <div style={{ flexDirection: "row", display: "flex" }}>
                            <input className="name-input" type="text" placeholder="first name" required name="firstname" onChange={(event)=>setFirst(event.target.value)}/>
                            <input className="name-input" type="text" placeholder="last name" required name="lastname" onChange={(event)=>setLast(event.target.value)}/>
                        </div>
                        <br />
                        <input className="info-text" type="text" placeholder="email" required name="email" onChange={(event)=>setEmail(event.target.value)}/><br />
                        <br />
                        <input className="info-text" type="text" placeholder="phone number" required name="phone" onChange={(event)=>setPhone(event.target.value)}/><br /><br />
                        <textarea
                            className="paragraph-text"
                            placeholder="Why is this candidate a good fit for this role? (max. 500 characters)"
                            cols="30"
                            rows="10"
                            maxLength="500"
                            onChange={(event)=>setMessage(event.target.value)}
                        />
                        <br /><br />
                        <input className="submit-button" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
    
}

export default ReferCandidate;