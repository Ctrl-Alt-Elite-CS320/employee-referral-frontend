import React from "react";
import '../styles/ReferCandidate.css';

class ReferCandidate extends React.Component {
    render() {
        return (
            <div className="refer" title="refer">
                <div className="refer-header">
                    <div>
                        <h1>Refer a candidate for:</h1><br />
                        <h2>Job Title</h2>
                    </div>
                </div>
                <br /><br />
                <div>
                    <div>
                        <form action="/action_page.php" target="_blank">
                            <input className="info-text" type="text" placeholder="email" required name="email" /><br /><br />
                            <input className="info-text" type="text" placeholder="first name" required name="firstname" /><br /><br />
                            <input className="info-text" type="text" placeholder="last name" required name="lastname" /><br /><br />
                            <input className="info-text" type="text" placeholder="phone number" required name="phone" /><br /><br />
                            <textarea
                                className="paragraph-text"
                                placeholder="Why is this candidate a good fit for this role? (max. 500 characters)"
                                cols="30"
                                rows="10"
                                maxLength="500"
                            />
                            <br /><br />
                            <input className="submit-button" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReferCandidate;