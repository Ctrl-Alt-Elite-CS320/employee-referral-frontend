import React from "react";
import '../styles/ListingForm.css';

class ListingForm extends React.Component {
    render() {
        return (
            <div className="listing">
                <form action="/action_page.php" target="_blank">
                    <input className="job-text" type="text" placeholder="New Job Listing e.g. Software Developer" required name="listing" /><br/>
                    <div className="textbox-container">
                        <div className="col-50">
                            <label for="salary">Yearly Salary:</label>
                            <input className="entry-info" id="salary" type="text" placeholder="" required name="salary" />
                        </div>
                        <div className="col-50">
                            <label for="exp">Minimum years of Exp:</label>
                            <input className="entry-info" id="exp" type="text" placeholder="" required name="exp" />
                        </div>
                    </div>
                    <div className="slider-container">
                        <div className="col-50">
                            <input className="slider" type="range" min="0" max="50" value="25" id="SalarySlider" />
                        </div>
                        <div className="col-50">
                            <input className="slider" type="range" min="0" max="50" value="25" id="ExpSlider" />
                        </div>
                    </div>
                    <textarea
                        className="paragraph-text"
                        placeholder="Job Description"
                        cols="30"
                        rows="10"
                        maxLength="500"
                    />
                    <br /><br />
                    <input className="post-button" type="submit" value="Post" />
                </form>
            </div>
        );
    }
}

export default ListingForm